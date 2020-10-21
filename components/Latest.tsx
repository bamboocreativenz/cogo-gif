/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Input, Button } from 'theme-ui'

import FullWidthCentered from './FullWidthCentered'
import OneThenTwoColumns from './OneThenTwoColumns'

interface LatestProps {
  copy: any // TODO: type better
}

export default function Latest ({ copy }: LatestProps) {
  return (
    <FullWidthCentered>
      <Flex px={[3, 5]} mb={5} sx={{ flexDirection: 'column' }}>
        <OneThenTwoColumns
          firstColumnContent={<Heading variant='h1'>{copy.Title}</Heading>}
          remainingContent={
            <Flex ml={[0, 4]} sx={{ flexDirection: 'column' }}>
              <Text variant='p3'>{copy.Content}</Text>
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
