/** @jsx jsx */
import {
  jsx,
  Flex,
  Box,
  Heading,
  Text,
  Link as TUILink,
  Button
} from 'theme-ui'
import Link from 'next/link'

import FullWidthCentered from './FullWidthCentered'
import ReportCircle from './ReportCircle'

interface IndustryReportsProps {}

export default function IndustryReports ({}: IndustryReportsProps) {
  return (
    <FullWidthCentered>
      <Flex px={[3, 5]} sx={{ flexDirection: 'column' }}>
        <Flex
          mb={4}
          sx={{
            flexDirection: ['column', 'row'],
            justifyContent: 'space-between'
          }}
        >
          <Text variant='button2'>FILTER BY:</Text>
          <Flex ml={[0, 4]}>
            <select>
              <option>test industry</option>
            </select>
            <select>
              <option>test theme</option>
            </select>
          </Flex>
        </Flex>

        <Flex sx={{ flexDirection: ['column', 'row'] }}>
          <Heading variant='h1'>Industry Reports</Heading>
          <Flex ml={[0, 4]} sx={{ flexDirection: 'column' }}>
            <Text variant='p3'>
              Doing good is not only good for your customers, it's good for your
              business too.
            </Text>
            <Box>
              <Button variant='primary'>DOWNLOAD REPORT</Button>
            </Box>
          </Flex>
        </Flex>

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
      </Flex>
    </FullWidthCentered>
  )
}
