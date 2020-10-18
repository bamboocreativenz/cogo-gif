/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Image, Button } from 'theme-ui'

import FullWidthCentered from './FullWidthCentered'
import OneThenTwoColumns from './OneThenTwoColumns'
import ReportCircle from './ReportCircle'

function CaseStudy () {
  return (
    <Flex sx={{ flexDirection: 'column', width: 500 }}>
      <Flex sx={{ position: 'relative' }}>
        <Heading
          variant='h2'
          sx={{ position: 'absolute', bottom: 2, left: 3, color: 'white' }}
        >
          MEVO
        </Heading>
        <Image src='/images/case-study-banner-mevo.png' />
      </Flex>

      <Flex p={3} sx={{ flexDirection: 'column' }}>
        <Flex>
          <Text>
            Mevo is Australasia's first car-share that isn’t tied to one
            particular parking spot. Mevo is changing how we move by providing a
            better alternative to private car ownership.
          </Text>
          <Image
            src='/images/case-study-logo-mevo.png'
            ml={3}
            sx={{ width: 7 }}
          />
        </Flex>
        <Flex>
          <Button>DOWNLOAD FULL</Button>
          <Flex>
            <Box>CLIMATE</Box>
            <Box>ICON</Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

interface CaseStudiesProps {}

export default function CaseStudies ({}: CaseStudiesProps) {
  return (
    <FullWidthCentered>
      <Flex px={[3, 5]} mb={5} sx={{ flexDirection: 'column' }}>
        <OneThenTwoColumns
          mb={4}
          firstColumnContent={<Heading variant='h1'>Case Studies</Heading>}
          remainingContent={
            <Flex ml={[0, 4]} sx={{ flexDirection: 'column' }}>
              <Text variant='p3'>
                Check out what businesses are doing to make good impact.
              </Text>
            </Flex>
          }
        />

        <Flex>
          <CaseStudy />
        </Flex>
      </Flex>
    </FullWidthCentered>
  )
}
