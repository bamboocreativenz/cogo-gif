/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Link as TUILink } from 'theme-ui'
import { Airtable } from '@bamboocreativenz/pip-airtable'
import keyBy from 'lodash/keyBy'

import FullWidthCentered from '../components/FullWidthCentered'
import Banner from '../components/Banner'
import ThemeLearnMore from '../components/ThemeLearnMore'
import IndustryReports from '../components/IndustryReports'
import CaseStudies from '../components/CaseStudies'
import AccreditorsAndCertifications from '../components/AccreditorsAndCertifications'
import Latest from '../components/Latest'
import Footer from '../components/Footer'

interface HomeProps {
  caseStudies: any // TODO: type better
  accreditors: any // TODO: type better
  home: any // TODO: type better
}

export default function Home ({ caseStudies, accreditors, home }: HomeProps) {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Banner
        backgroundImage={home.Banner.Image[0].url}
        headline={home.Banner.Title}
        subHeadline={home.Banner.Content}
      />

      <FullWidthCentered>
        <Flex
          px={[3, 5]}
          sx={{ width: '100%', flexDirection: 'column', alignItems: 'center' }}
        >
          <Flex mt={5} mb={3} sx={{ flexDirection: 'column' }}>
            <Heading variant='h1'>{home.Header.Title}</Heading>
            <Text variant='p2'>{home.Header.Content}</Text>
          </Flex>

          <Flex sx={{ flexDirection: ['column', 'row'] }}>
            <ThemeLearnMore
              title={home.Climate.Title}
              text={home.Climate.Content}
              link='/climate'
            />
            <ThemeLearnMore
              title={home.Waste.Title}
              text={home.Waste.Content}
              link='/waste'
            />
          </Flex>

          <Flex sx={{ flexDirection: ['column', 'row'] }}>
            <ThemeLearnMore
              title={home.Community.Title}
              text={home.Community.Content}
              link='/community'
            />
            <ThemeLearnMore
              title={home['Land & Water'].Title}
              text={home['Land & Water'].Content}
              link='/land-and-water'
            />
          </Flex>
        </Flex>
      </FullWidthCentered>

      <IndustryReports copy={home['Industry Reports']} />

      <CaseStudies caseStudies={caseStudies} copy={home['Case Studies']} />

      <AccreditorsAndCertifications
        accreditors={accreditors}
        copy={home.Accreditors}
      />

      <Latest copy={home.Latest} />

      <Footer />
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
  const homeRecords = await airtable.listRecords({
    tableName: 'Home Page',
    viewName: 'Grid View'
  })
  const home = keyBy(
    homeRecords.map(c => c.fields),
    'Name'
  )

  return {
    props: {
      caseStudies,
      accreditors,
      home
    }
  }
}
