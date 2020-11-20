/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Heading, Text, Image } from 'theme-ui'
import { useState } from 'react'
import NextImage from 'next/image'

import Banner from '../components/Banner'
import FullWidthCentered from '../components/FullWidthCentered'
import OneThenTwoColumns from '../components/OneThenTwoColumns'
import ReportsCaseStudiesAccreditors from '../components/ReportsCaseStudiesAccreditors'

import getPageStaticProps from '../util/getPageStaticProps'

interface ClimateProps {
  commonContent: any // TODO: type better
  marketInsights: any // TODO: type better
  industryReports: any // TODO: type better
  caseStudies: any // TODO: type better
  accreditors: any // TODO: type better
  page: any // TODO: type better
}

export default function Climate ({
  commonContent,
  marketInsights,
  industryReports,
  caseStudies,
  accreditors,
  page
}: ClimateProps) {
  const [selectedIndustry, setSelectedIndustry] = useState('')
  const [selectedTheme, setSelectedTheme] = useState('')

  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Banner
        backgroundImage={page.Banner.Image}
        backgroundImagePosition='center'
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
                {page.What.Image && (
                  <NextImage
                    src={page.What.Image[0].url}
                    alt='Image for What'
                    width={674}
                    height={380}
                  />
                )}
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
                {page.Why.Image && (
                  <NextImage
                    src={page.Why.Image[0].url}
                    alt='Image for Why'
                    width={674}
                    height={380}
                  />
                )}
              </Flex>
            }
          />

          <OneThenTwoColumns
            mt={5}
            firstColumnContent={
              <Heading variant='h1'>{page.Model.Title}</Heading>
            }
            remainingContent={
              <Flex ml={[0, 4]} mt={[3, 0]} sx={{ flexDirection: 'column' }}>
                <Text
                  variant='p2'
                  sx={{ whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{ __html: page.Model.Content }}
                />
                {page.Model.Image && (
                  <NextImage
                    src={page.Model.Image[0].url}
                    alt='Climate Model'
                    width={674}
                    height={380}
                  />
                )}
              </Flex>
            }
          />
        </Flex>
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
    tableName: 'Climate Page',
    shouldFetchReportsCaseStudiesAccreditors: true
  })
}
