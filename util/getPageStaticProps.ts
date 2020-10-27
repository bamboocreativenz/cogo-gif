import { Airtable } from '@bamboocreativenz/pip-airtable'
import keyBy from 'lodash/keyBy'

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
  let caseStudies = null
  let accreditors = null

  if (shouldFetchReportsCaseStudiesAccreditors) {
    const marketInsightsRecords = await airtable.listRecords({
      tableName: 'Market Insights',
      viewName: 'Grid View'
    })
    marketInsights = marketInsightsRecords.map(c => c.fields)
    const caseStudiesRecords = await airtable.listRecords({
      tableName: 'Case Studies',
      viewName: 'Grid View'
    })
    caseStudies = caseStudiesRecords.map(c => c.fields)
    const accreditorsRecords = await airtable.listRecords({
      tableName: 'Accreditors',
      viewName: 'Grid View'
    })
    accreditors = accreditorsRecords.map(c => c.fields)
  }

  const pageRecords = await airtable.listRecords({
    tableName,
    viewName: 'Grid View'
  })
  const page = keyBy(
    pageRecords.map(c => c.fields),
    'Name'
  )

  return {
    props: {
      marketInsights,
      caseStudies,
      accreditors,
      page
    }
  }
}
