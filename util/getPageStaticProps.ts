import { Airtable } from '@bamboocreativenz/pip-airtable'
import keyBy from 'lodash/keyBy'
import isEmpty from 'lodash/isEmpty'

interface GetPageStaticProps {
  tableName: string
  shouldFetchReportsCaseStudiesAccreditors: boolean
}

export default async function getPageStaticProps ({
  tableName,
  shouldFetchReportsCaseStudiesAccreditors
}: GetPageStaticProps) {
  // TODO: consider whether to use Zod types to parse and fail bad data if we are building for production?

  const airtable = new Airtable(
    process.env.AIRTABLE_API_KEY,
    process.env.AIRTABLE_BASE
  )

  let marketInsights = null
  let industryReports = null
  let caseStudies = null
  let accreditors = null

  if (shouldFetchReportsCaseStudiesAccreditors) {
    const marketInsightsRecords = await airtable.listRecords({
      tableName: 'Market Insights',
      viewName: 'Grid View'
    })

    marketInsights = marketInsightsRecords
      .filter(mi => !isEmpty(mi.fields))
      .map(c => ({ id: c.id, ...c.fields }))
    const industryReportsRecords = await airtable.listRecords({
      tableName: 'Industry Reports',
      viewName: 'Grid View'
    })
    // N.B. industryReports are only used for downloading the PDF links, so are returned keyed by industry
    // and are reduced to choose only the most recent report for that industry
    industryReports = industryReportsRecords
      .filter(c => !isEmpty(c.fields))
      .map(c => ({ id: c.id, ...c.fields }))
      .reduce(
        (acc, curr) => ({
          ...acc,
          [curr.Industry]: acc[curr.Industry]
            ? curr.Date > acc[curr.Industry].Date
              ? curr
              : acc[curr.Industry]
            : curr
        }),
        {}
      )
    const caseStudiesRecords = await airtable.listRecords({
      tableName: 'Case Studies',
      viewName: 'Grid View'
    })
    caseStudies = caseStudiesRecords
      .filter(c => !isEmpty(c.fields))
      .map(c => ({ id: c.id, ...c.fields }))
    const accreditorsRecords = await airtable.listRecords({
      tableName: 'Accreditors',
      viewName: 'Grid View'
    })
    accreditors = accreditorsRecords
      .filter(c => !isEmpty(c.fields))
      .map(c => ({ id: c.id, ...c.fields }))
  }

  const pageRecords = await airtable.listRecords({
    tableName,
    viewName: 'Grid View'
  })
  const page = keyBy(
    pageRecords.filter(c => !isEmpty(c.fields)).map(c => c.fields),
    'Name'
  )

  const commonContentRecords = await airtable.listRecords({
    tableName: 'Common Page Content',
    viewName: 'Grid View'
  })
  const commonContent = keyBy(
    commonContentRecords.filter(c => !isEmpty(c.fields)).map(c => c.fields),
    'Name'
  )

  const footerRecords = await airtable.listRecords({
    tableName: 'Footer',
    viewName: 'Grid View'
  })
  const footer = footerRecords
    .filter(c => {
      console.log(c.fields, process.env.VERCEL_ENV)
      if (process.env.VERCEL_ENV !== 'production') {
        return !isEmpty(c.fields)
      } else {
        return !isEmpty(c.fields) && c.fields.Production
      }
    })
    .map(c => c.fields)

  return {
    props: {
      commonContent,
      footer,
      marketInsights,
      industryReports,
      caseStudies,
      accreditors,
      page
    }
  }
}
