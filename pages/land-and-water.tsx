/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Image } from 'theme-ui'
import { Airtable } from '@bamboocreativenz/pip-airtable'
import keyBy from 'lodash/keyBy'

import Banner from '../components/Banner'
import Footer from '../components/Footer'
import FullWidthCentered from '../components/FullWidthCentered'
import OneThenTwoColumns from '../components/OneThenTwoColumns'
import IndustryReports from '../components/IndustryReports'
import CaseStudies from '../components/CaseStudies'
import AccreditorsAndCertifications from '../components/AccreditorsAndCertifications'
import Latest from '../components/Latest'

interface LandAndWaterProps {
  caseStudies: any // TODO: type better
  accreditors: any // TODO: type better
  landAndWater: any // TODO: type better
}

export default function LandAndWater ({
  caseStudies,
  accreditors,
  landAndWater
}: LandAndWaterProps) {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Banner
        backgroundImage={landAndWater.Banner.Image}
        backgroundImagePosition='right'
        headline={landAndWater.Banner.Title}
        subHeadline={landAndWater.Banner.Content}
      />

      <FullWidthCentered>
        <Flex px={[3, 5]} mb={[3, 5]} sx={{ flexDirection: 'column' }}>
          <OneThenTwoColumns
            mt={5}
            firstColumnContent={
              <Heading variant='h1'>{landAndWater.What.Title}</Heading>
            }
            remainingContent={
              <Flex ml={[0, 4]} mt={[3, 0]} sx={{ flexDirection: 'column' }}>
                <Text
                  variant='p2'
                  sx={{ whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{
                    __html: landAndWater.What.Content
                  }}
                />
              </Flex>
            }
          />

          <OneThenTwoColumns
            mt={5}
            firstColumnContent={
              <Heading variant='h1'>{landAndWater.Why.Title}</Heading>
            }
            remainingContent={
              <Flex ml={[0, 4]} mt={[3, 0]} sx={{ flexDirection: 'column' }}>
                <Text
                  variant='p2'
                  sx={{ whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{ __html: landAndWater.Why.Content }}
                />
              </Flex>
            }
          />
        </Flex>
        <Image src={landAndWater.Why.Image[0].url} />
      </FullWidthCentered>

      <IndustryReports copy={landAndWater['Industry Reports']} />

      <CaseStudies
        caseStudies={caseStudies}
        copy={landAndWater['Case Studies']}
      />

      <AccreditorsAndCertifications
        accreditors={accreditors}
        copy={landAndWater.Accreditors}
      />

      <Latest copy={landAndWater.Latest} />

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
  const landAndWaterRecords = await airtable.listRecords({
    tableName: 'Land & Water Page',
    viewName: 'Grid View'
  })
  const landAndWater = keyBy(
    landAndWaterRecords.map(c => c.fields),
    'Name'
  )

  return {
    props: {
      caseStudies,
      accreditors,
      landAndWater
    }
  }
}
