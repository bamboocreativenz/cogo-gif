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

interface CommunityProps {
  caseStudies: any // TODO: type better
  accreditors: any // TODO: type better
  community: any // TODO: type better
}

export default function Community ({
  caseStudies,
  accreditors,
  community
}: CommunityProps) {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Banner
        backgroundImage={community.Banner.Image}
        backgroundImagePosition='right'
        headline={community.Banner.Title}
        subHeadline={community.Banner.Content}
      />

      <FullWidthCentered>
        <Flex px={[3, 5]} mb={[3, 5]} sx={{ flexDirection: 'column' }}>
          <OneThenTwoColumns
            mt={5}
            firstColumnContent={
              <Heading variant='h1'>{community.What.Title}</Heading>
            }
            remainingContent={
              <Flex ml={[0, 4]} mt={[3, 0]} sx={{ flexDirection: 'column' }}>
                <Text
                  variant='p2'
                  sx={{ whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{ __html: community.What.Content }}
                />
              </Flex>
            }
          />

          <OneThenTwoColumns
            mt={5}
            firstColumnContent={
              <Heading variant='h1'>{community.Why.Title}</Heading>
            }
            remainingContent={
              <Flex ml={[0, 4]} mt={[3, 0]} sx={{ flexDirection: 'column' }}>
                <Text
                  variant='p2'
                  sx={{ whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{ __html: community.Why.Content }}
                />
              </Flex>
            }
          />
        </Flex>
        <Image src={community.Why.Image[0].url} />
      </FullWidthCentered>

      <IndustryReports copy={community['Industry Reports']} />

      <CaseStudies caseStudies={caseStudies} copy={community['Case Studies']} />

      <AccreditorsAndCertifications
        accreditors={accreditors}
        copy={community.Accreditors}
      />

      <Latest copy={community.Latest} />

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
  const communityRecords = await airtable.listRecords({
    tableName: 'Community Page',
    viewName: 'Grid View'
  })
  const community = keyBy(
    communityRecords.map(c => c.fields),
    'Name'
  )

  return {
    props: {
      caseStudies,
      accreditors,
      community
    }
  }
}
