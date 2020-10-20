/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Link as TUILink } from 'theme-ui'
import Link from 'next/link'
import { Airtable } from '@bamboocreativenz/pip-airtable'

import Banner from '../components/Banner'
import ThemeLearnMore from '../components/ThemeLearnMore'
import IndustryReports from '../components/IndustryReports'
import CaseStudies from '../components/CaseStudies'
import AccreditorsAndCertifications from '../components/AccreditorsAndCertifications'
import Latest from '../components/Latest'

interface HomeProps {
  caseStudies: any // TODO: type better
  accreditors: any // TODO: type better
}

export default function Home ({ caseStudies, accreditors }: HomeProps) {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Banner
        backgroundImage='/images/banner.png'
        headline='Create impact your customers will value'
        subHeadline='People are making more purchases from businesses that are taking action on issues they care about.'
      />

      <Flex
        px={[3, 5]}
        sx={{ width: '100%', flexDirection: 'column', alignItems: 'center' }}
      >
        <Flex my={4} sx={{ flexDirection: ['column', 'row'] }}>
          <ThemeLearnMore
            title='Climate'
            text='The Climate theme focuses on businesses that are demonstrating improving their relationship with the climate and reducing impacts. This may be through demonstrating reductions in CO2 emissions, becoming carbon neutral or even positive.'
            link='/climate'
          />
          <ThemeLearnMore
            title='Waste'
            text='The Climate theme focuses on businesses that are demonstrating improving their relationship with the climate and reducing impacts. This may be through demonstrating reductions in CO2 emissions, becoming carbon neutral or even positive.'
            link='/waste'
          />
        </Flex>

        <Flex my={4} sx={{ flexDirection: ['column', 'row'] }}>
          <ThemeLearnMore
            title='Community'
            text='The Climate theme focuses on businesses that are demonstrating improving their relationship with the climate and reducing impacts. This may be through demonstrating reductions in CO2 emissions, becoming carbon neutral or even positive.'
            link='/community'
          />
          <ThemeLearnMore
            title='Land & Water'
            text='The Climate theme focuses on businesses that are demonstrating improving their relationship with the climate and reducing impacts. This may be through demonstrating reductions in CO2 emissions, becoming carbon neutral or even positive.'
            link='/land-and-water'
          />
        </Flex>
      </Flex>

      <IndustryReports />

      <CaseStudies caseStudies={caseStudies} />

      <AccreditorsAndCertifications accreditors={accreditors} />

      <Latest />
    </Flex>
  )
}

export async function getStaticProps (context) {
  const airtable = new Airtable(
    process.env.AIRTABLE_API_KEY,
    process.env.AIRTABLE_BASE
  )
  const caseStudiesRecords = await airtable.listRecords({
    tableName: 'Case Studies',
    viewName: 'Grid View'
  })
  const caseStudies = caseStudiesRecords.map(c => c.fields)
  const accreditorsRecords = await airtable.listRecords({
    tableName: 'Accreditors',
    viewName: 'Grid View'
  })
  const accreditors = accreditorsRecords.map(c => c.fields)

  return {
    props: {
      caseStudies,
      accreditors
    }
  }
}
