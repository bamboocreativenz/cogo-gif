/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Heading, Text } from 'theme-ui'
import Head from 'next/head'
import { useState } from 'react'

import FullWidthCentered from '../components/FullWidthCentered'
import Banner from '../components/Banner'
import ThemeLearnMore from '../components/ThemeLearnMore'
import ReportsCaseStudiesAccreditors from '../components/ReportsCaseStudiesAccreditors'

import getPageStaticProps from '../util/getPageStaticProps'

import useFilters from '../hooks/useFilters'

interface HomeProps {
  commonContent: any // TODO: type better
  marketInsights: any // TODO: type better
  industryReports: any // TODO: type better
  caseStudies: any // TODO: type better
  accreditors: any // TODO: type better
  page: any // TODO: type better
}

export default function Home ({
  commonContent,
  marketInsights,
  industryReports,
  caseStudies,
  accreditors,
  page
}: HomeProps) {
  // const [selectedIndustries, setSelectedIndustries] = useState([])
  // const [selectedTheme, setSelectedTheme] = useState('')

  return (
    <>
      <Head>
        <title>Good Impact Framework</title>
      </Head>
      <Flex sx={{ flexDirection: 'column' }}>
        <Banner
          backgroundImage={page.Banner.Image}
          headline={page.Banner.Title}
          subHeadline={page.Banner.Content}
        />

        <FullWidthCentered>
          <Flex
            px={[3, 5]}
            sx={{
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Flex mt={5} mb={3} sx={{ flexDirection: 'column' }}>
              <Heading variant='h1'>{page.Header.Title}</Heading>
              <Text variant='p2'>{page.Header.Content}</Text>
            </Flex>

            <Flex sx={{ flexDirection: ['column', 'row'] }}>
              <ThemeLearnMore
                title={page.Climate.Title}
                text={page.Climate.Content}
                link='/climate'
              />
              <ThemeLearnMore
                title={page.Waste.Title}
                text={page.Waste.Content}
                link='/waste'
              />
            </Flex>

            <Flex sx={{ flexDirection: ['column', 'row'] }}>
              <ThemeLearnMore
                title={page.Community.Title}
                text={page.Community.Content}
                link='/community'
              />
              <ThemeLearnMore
                title={page['Land & Water'].Title}
                text={page['Land & Water'].Content}
                link='/land-and-water'
              />
            </Flex>
          </Flex>
        </FullWidthCentered>

        <ReportsCaseStudiesAccreditors
          commonContent={commonContent}
          marketInsights={marketInsights}
          industryReports={industryReports}
          caseStudies={caseStudies}
          accreditors={accreditors}
        />
      </Flex>
    </>
  )
}

export async function getStaticProps (context) {
  return getPageStaticProps({
    tableName: 'Home Page',
    shouldFetchReportsCaseStudiesAccreditors: true
  })
}
