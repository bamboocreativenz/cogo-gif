/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Heading, Text } from 'theme-ui'
import { useState } from 'react'
import Head from 'next/head'
import NextImage from 'next/image'

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
  const [selectedTheme, setSelectedTheme] = useState('Land & Water')

  return (
    <>
      <Head>
        <title>Good Impact Framework - Community</title>
      </Head>
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
                <Heading variant='h1'>{page.How.Title}</Heading>
              }
              remainingContent={
                <Flex ml={[0, 4]} mt={[3, 0]} sx={{ flexDirection: 'column' }}>
                  <Text
                    variant='p2'
                    sx={{ whiteSpace: 'pre-wrap' }}
                    dangerouslySetInnerHTML={{ __html: page.How.Content }}
                  />
                  {page.How.Image && (
                    <NextImage
                      src={page.How.Image[0].url}
                      alt='Image for How'
                      width={674}
                      height={380}
                    />
                  )}
                </Flex>
              }
            />
          </Flex>
          {page.Why.Image && (
            <NextImage
              src={page.Why.Image[0].url}
              alt='Page Why'
              width={1152}
              height={379}
            />
          )}
        </FullWidthCentered>

        <ReportsCaseStudiesAccreditors
          commonContent={commonContent}
          marketInsights={marketInsights}
          industryReports={industryReports}
          caseStudies={caseStudies}
          accreditors={accreditors}
          defaultTheme={'Land & Water'}
        />
      </Flex>
    </>
  )
}

export async function getStaticProps (context) {
  return getPageStaticProps({
    tableName: 'Land & Water Page',
    shouldFetchReportsCaseStudiesAccreditors: true
  })
}
