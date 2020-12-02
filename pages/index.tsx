/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Heading, Text, Link as TUILink } from 'theme-ui'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import Link from 'next/link'
import Head from 'next/head'

import FullWidthCentered from '../components/FullWidthCentered'
import Banner from '../components/Banner'
import ThemeLearnMore from '../components/ThemeLearnMore'
import ReportsCaseStudiesAccreditors from '../components/ReportsCaseStudiesAccreditors'

import getPageStaticProps from '../util/getPageStaticProps'

interface HomeProps {
  commonContent: any // TODO: type better
  footer: Array<any> // TODO: type better
  marketInsights: any // TODO: type better
  industryReports: any // TODO: type better
  caseStudies: any // TODO: type better
  accreditors: any // TODO: type better
  page: any // TODO: type better
}

export default function Home ({
  commonContent,
  footer,
  marketInsights,
  industryReports,
  caseStudies,
  accreditors,
  page
}: HomeProps) {
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
              {/* <Text variant='p2'>{page.Header.Content}</Text> */}
              <ReactMarkdown
                renderers={{
                  paragraph: props => (
                    <Text
                      variant='p2'
                      sx={{ whiteSpace: 'pre-wrap' }}
                      {...props}
                    />
                  ),
                  link: props => (
                    // N.B. airtable doesn't seem to save relative links in Markdown correctly, so need to refer to the host property here
                    <Link href={new URL(props.href).host} passHref>
                      <TUILink variant='learn' {...props} />
                    </Link>
                  )
                }}
                plugins={[gfm]}
                children={page.Header.Content}
              />
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
          footer={footer}
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
