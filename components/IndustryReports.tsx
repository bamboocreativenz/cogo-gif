/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Button, Image, Input } from 'theme-ui'
import { Dispatch, SetStateAction, useState } from 'react'
import Modal from 'react-modal'
import without from 'lodash/without'

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

function getHandleSelectIndustry ({
  selectedIndustries,
  setSelectedIndustries,
  industry
}) {
  return function handleSelectIndustry () {
    if (selectedIndustries.includes(industry)) {
      setSelectedIndustries(without(selectedIndustries, industry))
    } else {
      setSelectedIndustries(selectedIndustries.concat(industry))
    }
  }
}

interface IndustryReportsProps {
  copy: any // TODO: type better
  download: any // TODO: type better
  marketInsights: any // TODO: type better
  selectedIndustry: string
  setSelectedIndustry: Dispatch<SetStateAction<string>>
  selectedTheme: string
  setSelectedTheme: Dispatch<SetStateAction<string>>
}

export default function IndustryReports ({
  copy,
  download,
  marketInsights,
  selectedIndustry,
  setSelectedIndustry,
  selectedTheme,
  setSelectedTheme
}: IndustryReportsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedIndustries, setSelectedIndustries] = useState([])

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
                <Button variant='primary' onClick={() => setIsModalOpen(true)}>
                  DOWNLOAD REPORT
                </Button>
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
                  minWidth: [200, 7]
                }}
              >
                <Image src={mi.Image[0].url} />
              </Box>
            ))}
        </Flex>

        <Flex
          mt={4}
          sx={{
            display: ['flex', 'none'],
            flexDirection: 'column',
            alignItems: ['center', 'flex-start']
          }}
        >
          <Box>
            <Button variant='primary'>DOWNLOAD REPORT</Button>
          </Box>
        </Flex>
      </Flex>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          background: 'white',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: 'lightGrey;'
        }}
      >
        <Flex p={5} sx={{ flexDirection: 'column' }}>
          <Flex>
            <Heading variant='h1' mr={3} sx={{ flex: 2 }}>
              {download.Title}
            </Heading>
            <Text mt={2} variant='p3' sx={{ flex: 1 }}>
              {download.Content}
            </Text>
          </Flex>
          <Flex mt={3} sx={{ flexWrap: 'wrap' }}>
            {industries.map((industry, i) => (
              <Flex
                key={i}
                pr={3}
                py={2}
                onClick={getHandleSelectIndustry({
                  industry: industry.name,
                  selectedIndustries,
                  setSelectedIndustries
                })}
                sx={{
                  width: 160,
                  alignItems: 'center',
                  cursor: 'pointer',
                  opacity: selectedIndustries.includes(industry.name)
                    ? '1'
                    : '0.4',
                  '&:hover': {
                    opacity: selectedIndustries.includes(industry.name)
                      ? '1'
                      : '0.7'
                  }
                }}
              >
                <Image
                  mr={2}
                  src={industry.icon}
                  sx={{ width: 4, minWidth: 4 }}
                />
                <Text>{industry.name}</Text>
              </Flex>
            ))}
          </Flex>
          <Flex mt={3} sx={{ alignItems: 'center' }}>
            <Input placeholder='Email' />
            <Button ml={2} variant='primary' sx={{ minWidth: 160, height: 40 }}>
              DOWNLOAD PDF
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </FullWidthCentered>
  )
}
