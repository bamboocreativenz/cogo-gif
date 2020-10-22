/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Image } from 'theme-ui'
import { useState } from 'react'
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

import getPageStaticProps from '../util/getPageStaticProps'

interface WasteProps {
  caseStudies: any // TODO: type better
  accreditors: any // TODO: type better
  page: any // TODO: type better
}

export default function Waste ({ caseStudies, accreditors, page }: WasteProps) {
  const [selectedIndustry, setSelectedIndustry] = useState('')
  const [selectedTheme, setSelectedTheme] = useState('')

  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Banner
        backgroundImage={page.Banner.Image}
        backgroundImagePosition='right'
        headline={page.Banner.Title}
        subHeadline={page.Banner.Content}
      />

      <FullWidthCentered>
        <Flex px={[3, 5]} mb={[3, 5]} sx={{ flexDirection: 'column' }}>
          <OneThenTwoColumns
            mt={5}
            firstColumnContent={
              <Heading variant='h1'>{page.What.Title}</Heading>
            }
            remainingContent={
              <Flex ml={[0, 4]} mt={[3, 0]} sx={{ flexDirection: 'column' }}>
                <Text
                  variant='p2'
                  sx={{ whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{ __html: page.What.Content }}
                />
              </Flex>
            }
          />

          <OneThenTwoColumns
            mt={5}
            firstColumnContent={
              <Heading variant='h1'>{page.Why.Title}</Heading>
            }
            remainingContent={
              <Flex ml={[0, 4]} mt={[3, 0]} sx={{ flexDirection: 'column' }}>
                <Text
                  variant='p2'
                  sx={{ whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{ __html: page.Why.Content }}
                />
              </Flex>
            }
          />
        </Flex>
        <Image src={page.Why.Image[0].url} />
      </FullWidthCentered>

      <IndustryReports
        copy={page['Industry Reports']}
        selectedIndustry={selectedIndustry}
        setSelectedIndustry={setSelectedIndustry}
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
      />

      <CaseStudies
        caseStudies={caseStudies}
        copy={page['Case Studies']}
        selectedIndustry={selectedIndustry}
        selectedTheme={selectedTheme}
      />

      <AccreditorsAndCertifications
        accreditors={accreditors}
        copy={page.Accreditors}
        selectedIndustry={selectedIndustry}
        selectedTheme={selectedTheme}
      />

      <Latest copy={page.Latest} />

      <Footer />
    </Flex>
  )
}

export async function getStaticProps (context) {
  return getPageStaticProps({
    tableName: 'Waste Page',
    shouldFetchCaseStudiesAccreditors: true
  })
}
