/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Image } from 'theme-ui'
import { Airtable } from '@bamboocreativenz/pip-airtable'
import keyBy from 'lodash/keyBy'

import Banner from '../components/Banner'
import Footer from '../components/Footer'
import FullWidthCentered from '../components/FullWidthCentered'
import OneThenTwoColumns from '../components/OneThenTwoColumns'
import Partner from '../components/Partner'
import TeamMember from '../components/TeamMember'

interface AboutProps {
  about: any // TODO: type better
}

export default function About ({ about }: AboutProps) {
  console.log({ about })
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Banner
        backgroundImage={about.Banner.Image}
        headline={about.Banner.Title}
        subHeadline={about.Banner.Content}
      />

      <FullWidthCentered>
        <Flex px={[3, 5]} mb={[3, 5]} sx={{ flexDirection: 'column' }}>
          <OneThenTwoColumns
            mt={5}
            firstColumnContent={
              <Heading variant='h1'>{about.What.Title}</Heading>
            }
            remainingContent={
              <Flex ml={[0, 4]} mt={[3, 0]} sx={{ flexDirection: 'column' }}>
                <Text
                  variant='p2'
                  sx={{ whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{ __html: about.What.Content }}
                />
              </Flex>
            }
          />

          <OneThenTwoColumns
            mt={5}
            firstColumnContent={
              <Heading variant='h1'>{about.How.Title}</Heading>
            }
            remainingContent={
              <Flex ml={[0, 4]} mt={[3, 0]} sx={{ flexDirection: 'column' }}>
                <Text
                  variant='p2'
                  sx={{ whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{ __html: about.How.Content }}
                />
              </Flex>
            }
          />

          <OneThenTwoColumns
            mt={5}
            firstColumnContent={
              <Heading variant='h1'>{about.Who.Title}</Heading>
            }
            remainingContent={
              <Flex ml={[0, 4]} mt={[3, 0]} sx={{ flexDirection: 'column' }}>
                <Text
                  variant='p2'
                  sx={{ whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{ __html: about.Who.Content }}
                />
              </Flex>
            }
          />

          <Box my={[3, 4]}>
            <Partner copy={about['Partner 1']} />
            <Partner copy={about['Partner 2']} />
            <Partner copy={about['Partner 3']} />
            <Partner copy={about['Partner 4']} />
            <Partner copy={about['Partner 5']} />
          </Box>

          <Flex my={[5, 0]} sx={{ flexDirection: 'column' }}>
            <Heading mb={3}>Get in touch with the GIF team</Heading>
            <TeamMember copy={about['Team 1']} />
            <TeamMember copy={about['Team 2']} />
            <TeamMember copy={about['Team 3']} />
          </Flex>
        </Flex>
      </FullWidthCentered>

      <Footer />
    </Flex>
  )
}

export async function getStaticProps (context) {
  const airtable = new Airtable(
    process.env.AIRTABLE_API_KEY,
    process.env.AIRTABLE_BASE
  )
  const aboutRecords = await airtable.listRecords({
    tableName: 'About Page',
    viewName: 'Grid View'
  })
  const about = keyBy(
    aboutRecords.map(c => c.fields),
    'Name'
  )

  return {
    props: {
      about
    }
  }
}
