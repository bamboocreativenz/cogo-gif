/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Button } from 'theme-ui'

import FullWidthCentered from './FullWidthCentered'
import OneThenTwoColumns from './OneThenTwoColumns'
import ReportCircle from './ReportCircle'

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

        <Flex></Flex>
      </Flex>
    </FullWidthCentered>
  )
}
