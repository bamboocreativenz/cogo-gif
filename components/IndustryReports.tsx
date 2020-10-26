/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Button, Image } from 'theme-ui'
import { Dispatch, SetStateAction } from 'react'

import FullWidthCentered from './FullWidthCentered'
import OneThenTwoColumns from './OneThenTwoColumns'
import ReportCircle from './ReportCircle'
import Dropdown from './Dropdown'
import ThemePill from './ThemePill'

const industries = [
  { name: 'Food & Drink', icon: '/icons/food-and-drink.png' },
  { name: 'Health & Beauty', icon: '/icons/health-and-beauty.png' },
  { name: 'Transport', icon: '/icons/transport.png' },
  { name: 'Fashion', icon: '/icons/fashion.png' },
  { name: 'Baby & Child', icon: '/icons/baby-and-child.png' },
  { name: 'Utilities', icon: '/icons/utilities.png' },
  { name: 'Grocery', icon: '/icons/Grocery.png' },
  { name: 'Activities', icon: '/icons/activities.png' },
  { name: 'Homeware & Gifts', icon: '/icons/homeware-and-gifts.png' },
  { name: 'Financial Services', icon: '/icons/financial-services.png' }
]
const themes = [
  { name: 'Climate', pill: <ThemePill theme='Climate' size='small' /> },
  { name: 'Waste', pill: <ThemePill theme='Waste' size='small' /> },
  { name: 'Community', pill: <ThemePill theme='Community' size='small' /> },
  {
    name: 'Land & Water',
    pill: <ThemePill theme='Land & Water' size='small' />
  }
]

interface IndustryReportsProps {
  copy: any // TODO: type better
  marketInsights: any // TODO: type better
  selectedIndustry: string
  setSelectedIndustry: Dispatch<SetStateAction<string>>
  selectedTheme: string
  setSelectedTheme: Dispatch<SetStateAction<string>>
}

export default function IndustryReports ({
  copy,
  marketInsights,
  selectedIndustry,
  setSelectedIndustry,
  selectedTheme,
  setSelectedTheme
}: IndustryReportsProps) {
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
            <Flex ml={[0, 4]} sx={{ flex: 2, justifyContent: 'space-between' }}>
              <Flex mr={4} sx={{ flex: 1 }}>
                <Dropdown
                  items={industries}
                  selectedItemName={selectedIndustry}
                  placeholder='Industry'
                  onChange={({ selectedItem }) =>
                    setSelectedIndustry(selectedItem.name)
                  }
                />
              </Flex>
              <Flex ml={4} sx={{ flex: 1 }}>
                <Dropdown
                  items={themes}
                  selectedItemName={selectedTheme}
                  placeholder='Theme'
                  onChange={({ selectedItem }) =>
                    setSelectedTheme(selectedItem.name)
                  }
                />
              </Flex>
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

        <Flex py={4} sx={{ overflowX: 'scroll' }}>
          {marketInsights
            .filter(mi =>
              selectedTheme && selectedIndustry
                ? mi.Themes.includes(selectedTheme) &&
                  mi.Industries.includes(selectedIndustry)
                : selectedTheme
                ? mi.Themes.includes(selectedTheme)
                : selectedIndustry
                ? mi.Industries.includes(selectedIndustry)
                : mi
            )
            .map((mi, i) => (
              <Box
                key={i}
                mr={[3, 5]}
                sx={{
                  minWidth: 7
                }}
              >
                <Image src={mi.Image[0].url} />
              </Box>
            ))}
          {/* <ReportCircle
            statisticPercent={87}
            text='of users on CoGo want to see businesses take action on Climate'
            image='/images/CoGo-report.png'
          />
          <ReportCircle
            statisticPercent={67}
            text='of Kiwis will make eco-conscious choices, even if more expensive'
            image='/images/CoGo-report.png'
          /> */}
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
