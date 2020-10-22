import { Airtable } from '@bamboocreativenz/pip-airtable'
import keyBy from 'lodash/keyBy'

interface GetPageStaticProps {
  tableName: string
  shouldFetchCaseStudiesAccreditors: boolean
}

export default async function getPageStaticProps ({
  tableName,
  shouldFetchCaseStudiesAccreditors
}: GetPageStaticProps) {
  const airtable = new Airtable(
    process.env.AIRTABLE_API_KEY,
    process.env.AIRTABLE_BASE
  )

  let caseStudies = null
  let accreditors = null

  if (shouldFetchCaseStudiesAccreditors) {
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
      caseStudies,
      accreditors,
      page
    }
  }
}
