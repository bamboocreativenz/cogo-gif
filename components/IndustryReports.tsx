/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Button, Image } from 'theme-ui'
import { useSelect } from 'downshift'

import FullWidthCentered from './FullWidthCentered'
import OneThenTwoColumns from './OneThenTwoColumns'
import ReportCircle from './ReportCircle'

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

function DropdownSelect () {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getItemProps
  } = useSelect({
    items: industries
  })
  return (
    <Flex sx={{ position: 'relative', flex: 1, flexDirection: 'column' }}>
      <Button
        type='button'
        variant='tertiary'
        {...getToggleButtonProps()}
        sx={{
          fontStyle: 'italic',
          color: 'midGrey',
          borderBottom: '1px solid grey'
        }}
      >
        <Flex
          bg='greyBackground'
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          {(selectedItem && selectedItem.name) || 'Industry'}
          <Image src='/icons/chevron-down.png' sx={{ width: 4 }} />
        </Flex>
      </Button>
      <Flex
        {...getMenuProps()}
        bg='white'
        py={isOpen ? 3 : 0}
        sx={{
          position: 'absolute',
          top: 4,
          width: '100%',
          flexDirection: 'column',
          zIndex: 100
        }}
      >
        {isOpen &&
          industries.map((item, index) => (
            <Flex
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
              px={3}
              py={2}
              sx={{
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover': {
                  bg: 'greyBackground'
                }
              }}
            >
              <Image src={item.icon} mr={2} sx={{ width: 4 }} />
              <Text>{item.name}</Text>
            </Flex>
          ))}
      </Flex>
    </Flex>
  )
}

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
            <Flex ml={[0, 4]} sx={{ flex: 2, justifyContent: 'space-between' }}>
              <DropdownSelect />
              <DropdownSelect />
              {/* <Select sx={{ width: '100%' }}>
                <option>test industry</option>
              </Select>
              <Select sx={{ width: '100%' }}>
                <option>test theme</option>
              </Select> */}
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
