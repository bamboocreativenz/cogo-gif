/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Heading, Text, Image } from 'theme-ui'
import { useState } from 'react'

import Banner from '../components/Banner'
import FullWidthCentered from '../components/FullWidthCentered'
import OneThenTwoColumns from '../components/OneThenTwoColumns'
import ReportsCaseStudiesAccreditors from '../components/ReportsCaseStudiesAccreditors'

import getPageStaticProps from '../util/getPageStaticProps'

interface LandAndWaterProps {
  commonContent: any // TODO: type better
  marketInsights: any // TODO: type better
  industryReports: any // TODO: type better
  caseStudies: any // TODO: type better
  accreditors: any // TODO: type better
  page: any // TODO: type better
}

export default function LandAndWater ({
  commonContent,
  marketInsights,
  industryReports,
  caseStudies,
  accreditors,
  page
}: LandAndWaterProps) {
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
                  dangerouslySetInnerHTML={{
                    __html: page.What.Content
                  }}
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

      <ReportsCaseStudiesAccreditors
        commonContent={commonContent}
        selectedIndustry={selectedIndustry}
        setSelectedIndustry={setSelectedIndustry}
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
        marketInsights={marketInsights}
        industryReports={industryReports}
        caseStudies={caseStudies}
        accreditors={accreditors}
      />
    </Flex>
  )
}

export async function getStaticProps (context) {
  return getPageStaticProps({
    tableName: 'Land & Water Page',
    shouldFetchReportsCaseStudiesAccreditors: true
  })
}
