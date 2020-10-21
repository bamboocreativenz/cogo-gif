/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Button } from 'theme-ui'

import FullWidthCentered from './FullWidthCentered'
import OneThenTwoColumns from './OneThenTwoColumns'
import ReportCircle from './ReportCircle'

interface IndustryReportsProps {
  copy: any // TODO: type better
}

export default function IndustryReports ({ copy }: IndustryReportsProps) {
  return (
    <FullWidthCentered bg='greyBackground'>
      <Flex px={[3, 5]} mb={5} mt={4} sx={{ flexDirection: 'column' }}>
        <OneThenTwoColumns
          mb={4}
          firstColumnContent={
            <Text variant='button2' sx={{ flex: 1 }}>
              FILTER BY:
            </Text>
          }
          remainingContent={
            <Flex ml={[0, 4]} sx={{ flex: 2 }}>
              <select>
                <option>test industry</option>
              </select>
              <select>
                <option>test theme</option>
              </select>
            </Flex>
          }
        />

        <OneThenTwoColumns
          mb={4}
          firstColumnContent={<Heading variant='h1'>{copy.Title}</Heading>}
          remainingContent={
            <Flex ml={[0, 4]} sx={{ flexDirection: 'column' }}>
              <Text variant='p3'>{copy.Content}</Text>
              <Flex
                mt={3}
                sx={{ display: ['none', 'initial'], flexDirection: 'column' }}
              >
                <Button variant='primary'>DOWNLOAD REPORT</Button>
              </Flex>
            </Flex>
          }
        />

        <Flex>
          <ReportCircle
            statisticPercent={87}
            text='of users on CoGo want to see businesses take action on Climate'
            image='/images/CoGo-report.png'
          />
          <ReportCircle
            statisticPercent={67}
            text='of Kiwis will make eco-conscious choices, even if more expensive'
            image='/images/CoGo-report.png'
          />
        </Flex>

        <Flex
          mt={4}
          sx={{ display: ['initial', 'none'], flexDirection: 'column' }}
        >
          <Box>
            <Button variant='primary'>DOWNLOAD REPORT</Button>
          </Box>
        </Flex>
      </Flex>
    </FullWidthCentered>
  )
}
