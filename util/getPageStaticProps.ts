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
      viewName: 'Grid view'
    })

    marketInsights = marketInsightsRecords
      .filter(mi => !isEmpty(mi.fields))
      .map(c => ({ id: c.id, ...c.fields }))
    const industryReportsRecords = await airtable.listRecords({
      tableName: 'Industry Reports',
      viewName: 'Grid view'
    })
    // N.B. industryReports are only used for downloading the PDF links, so are returned keyed by industry
    // and are reduced to choose only the most recent report for that industry
    industryReports = industryReportsRecords
      .filter(c => !isEmpty(c.fields))
      .map(c => ({ id: c.id, ...c.fields }))
      .reduce(
        (acc, curr) => ({
          ...acc,
          // @ts-expect-error
          [curr.Industry]: acc[curr.Industry]
            ? // @ts-expect-error
              curr.Date > acc[curr.Industry].Date
              ? curr
              : // @ts-expect-error
                acc[curr.Industry]
            : curr
        }),
        {}
      )
    const caseStudiesRecords = await airtable.listRecords({
      tableName: 'Case Studies',
      viewName: 'Grid view'
    })
    caseStudies = caseStudiesRecords
      .filter(c => !isEmpty(c.fields))
      .map(c => ({ id: c.id, ...c.fields }))
    const accreditorsRecords = await airtable.listRecords({
      tableName: 'Accreditors',
      viewName: 'Grid view'
    })
    accreditors = accreditorsRecords
      .filter(c => !isEmpty(c.fields))
      .map(c => ({ id: c.id, ...c.fields }))
  }

  const aboutPageProdRecords = [
    'Who',
    'Partner 1',
    'Partner 2',
    'Partner 3',
    'Partner 4',
    'Partner 5'
  ]
  const pageRecords = await airtable.listRecords({
    tableName,
    viewName: 'Grid view'
  })
  const page = keyBy(
    pageRecords
      .filter(c => {
        if (tableName === 'About Page') {
          // handle partner images only being shown in non-prod for now
          if (process.env.VERCEL_ENV !== 'production') {
            return !isEmpty(c.fields)
          } else {
            // @ts-expect-error
            return (
              !isEmpty(c.fields) &&
              !(
                aboutPageProdRecords.includes(c.fields.Name) &&
                !c.fields['Production (only relevant for Who and Partners)']
              )
            )
          }
        } else {
          return !isEmpty(c.fields)
        }
      })
      .map(c => c.fields),
    'Name'
  )

  const commonContentRecords = await airtable.listRecords({
    tableName: 'Common Page Content',
    viewName: 'Grid view'
  })
  const commonContent = keyBy(
    commonContentRecords.filter(c => !isEmpty(c.fields)).map(c => c.fields),
    'Name'
  )

  const footerRecords = await airtable.listRecords({
    tableName: 'Footer',
    viewName: 'Grid view'
  })
  const footer = footerRecords
    .filter(c => {
      if (process.env.VERCEL_ENV !== 'production') {
        return !isEmpty(c.fields)
      } else {
        // @ts-expect-error
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
