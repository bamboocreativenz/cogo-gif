/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Text, Button, Image } from 'theme-ui'
import { useSelect } from 'downshift'

const chevronDown = require('../public/icons/chevron-down.png')

type DropdownItem = {
  name: string
  icon?: string
  pill?: React.ReactNode
}
interface DropdownProps {
  selectedItemName?: string
  items: Array<DropdownItem>
  placeholder: string
  onChange: any // TODO: type better
}

export default function Dropdown ({
  selectedItemName,
  items,
  placeholder,
  onChange
}: DropdownProps) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getItemProps
  } = useSelect({
    items,
    initialSelectedItem: selectedItemName
      ? items.find(i => i.name === selectedItemName)
      : null,
    onSelectedItemChange: onChange
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
          borderBottomWidth: 1,
          borderBottomColor: 'text',
          borderBottomStyle: 'solid'
        }}
      >
        <Flex
          bg='greyBackground'
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          {(selectedItem && selectedItem.name) || placeholder}
          <Image src={chevronDown} sx={{ width: 4 }} />
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
          items.map((item, index) => (
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
              {item.icon ? (
                <>
                  <Image src={item.icon} mr={3} sx={{ width: 4 }} />
                  <Text>{item.name}</Text>
                </>
              ) : (
                item.pill
              )}
            </Flex>
          ))}
      </Flex>
    </Flex>
  )
}
