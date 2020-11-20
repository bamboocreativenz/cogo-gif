/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Image } from 'theme-ui'
import NextImage from 'next/image'

import Banner from '../components/Banner'
import Footer from '../components/Footer'
import FullWidthCentered from '../components/FullWidthCentered'
import OneThenTwoColumns from '../components/OneThenTwoColumns'
import Partner from '../components/Partner'
import TeamMember from '../components/TeamMember'

import getPageStaticProps from '../util/getPageStaticProps'

interface AboutProps {
  page: any // TODO: type better
  commonContent: any // TODO: type better
}

export default function About ({ page, commonContent }: AboutProps) {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Banner
        backgroundImage={page.Banner.Image}
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

          <OneThenTwoColumns
            mt={5}
            firstColumnContent={
              <Heading variant='h1'>{page.Who.Title}</Heading>
            }
            remainingContent={
              <Flex ml={[0, 4]} mt={[3, 0]} sx={{ flexDirection: 'column' }}>
                <Text
                  variant='p2'
                  sx={{ whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{ __html: page.Who.Content }}
                />
                {page.Who.Image && (
                  <NextImage
                    src={page.Who.Image[0].url}
                    alt='Image for Who'
                    width={674}
                    height={380}
                  />
                )}
              </Flex>
            }
          />

          <Box my={[3, 4]}>
            <Partner copy={page['Partner 1']} />
            <Partner copy={page['Partner 2']} />
            <Partner copy={page['Partner 3']} />
            <Partner copy={page['Partner 4']} />
            <Partner copy={page['Partner 5']} />
          </Box>

          <Flex my={[5, 0]} sx={{ flexDirection: 'column' }}>
            <Heading mb={3}>Get in touch with the GIF team</Heading>
            <TeamMember copy={page['Team 1']} />
            <TeamMember copy={page['Team 2']} />
            <TeamMember copy={page['Team 3']} />
          </Flex>
        </Flex>
      </FullWidthCentered>

      <Footer
        logoWestpac={commonContent['Westpac'].Image}
        logoWWF={commonContent['WWF'].Image}
        logoBusinessGovtNZ={commonContent['business.govt.nz'].Image}
        logoSustainableBusinessNetwork={
          commonContent['Sustainable Business Network'].Image
        }
        logoCoGo={commonContent['CoGo'].Image}
      />
    </Flex>
  )
}

export async function getStaticProps (context) {
  return getPageStaticProps({
    tableName: 'About Page',
    shouldFetchReportsCaseStudiesAccreditors: false
  })
}
