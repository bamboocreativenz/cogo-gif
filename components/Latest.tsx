/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Input, Button } from 'theme-ui'

import FullWidthCentered from './FullWidthCentered'
import OneThenTwoColumns from './OneThenTwoColumns'

interface LatestProps {}

export default function Latest ({}: LatestProps) {
  return (
    <FullWidthCentered>
      <Flex px={[3, 5]} mb={5} sx={{ flexDirection: 'column' }}>
        <OneThenTwoColumns
          firstColumnContent={<Heading variant='h1'>Latest from GIF</Heading>}
          remainingContent={
            <Flex ml={[0, 4]} sx={{ flexDirection: 'column' }}>
              <Text variant='p3'>
                Want to get the latest updates about how you can make good
                impact? Sign up for our newsletter.
              </Text>
              <Flex mt={3} sx={{ alignItems: 'center' }}>
                <Input placeholder='Email' />
                <Button
                  ml={2}
                  variant='primary'
                  sx={{ minWidth: 100, height: 40 }}
                >
                  SIGN UP
                </Button>
              </Flex>
            </Flex>
          }
        />
      </Flex>
    </FullWidthCentered>
  )
}
