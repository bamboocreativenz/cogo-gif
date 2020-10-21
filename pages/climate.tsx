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

interface ClimateProps {
  caseStudies: any // TODO: type better
  accreditors: any // TODO: type better
  climate: any // TODO: type better
}

export default function Climate ({
  caseStudies,
  accreditors,
  climate
}: ClimateProps) {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Banner
        backgroundImage={climate.Banner.Image}
        backgroundImagePosition='center'
        headline={climate.Banner.Title}
        subHeadline={climate.Banner.Content}
      />

      <FullWidthCentered>
        <Flex px={[3, 5]} mb={[3, 5]} sx={{ flexDirection: 'column' }}>
          <OneThenTwoColumns
            mt={5}
            firstColumnContent={
              <Heading variant='h1'>{climate.What.Title}</Heading>
            }
            remainingContent={
              <Flex ml={[0, 4]} mt={[3, 0]} sx={{ flexDirection: 'column' }}>
                <Text
                  variant='p2'
                  sx={{ whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{ __html: climate.What.Content }}
                />
              </Flex>
            }
          />

          <OneThenTwoColumns
            mt={5}
            firstColumnContent={
              <Heading variant='h1'>{climate.Why.Title}</Heading>
            }
            remainingContent={
              <Flex ml={[0, 4]} mt={[3, 0]} sx={{ flexDirection: 'column' }}>
                <Text
                  variant='p2'
                  sx={{ whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{ __html: climate.Why.Content }}
                />
              </Flex>
            }
          />

          <OneThenTwoColumns
            mt={5}
            firstColumnContent={
              <Heading variant='h1'>{climate.Model.Title}</Heading>
            }
            remainingContent={
              <Flex ml={[0, 4]} mt={[3, 0]} sx={{ flexDirection: 'column' }}>
                <Text
                  variant='p2'
                  sx={{ whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{ __html: climate.Model.Content }}
                />
                <Image src={climate.Model.Image[0].url} />
              </Flex>
            }
          />
        </Flex>
      </FullWidthCentered>

      <IndustryReports copy={climate['Industry Reports']} />

      <CaseStudies caseStudies={caseStudies} copy={climate['Case Studies']} />

      <AccreditorsAndCertifications
        accreditors={accreditors}
        copy={climate.Accreditors}
      />

      <Latest copy={climate.Latest} />

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
  const climateRecords = await airtable.listRecords({
    tableName: 'Climate Page',
    viewName: 'Grid View'
  })
  const climate = keyBy(
    climateRecords.map(c => c.fields),
    'Name'
  )

  return {
    props: {
      caseStudies,
      accreditors,
      climate
    }
  }
}
