/** @jsx jsx */
import { jsx, Flex, Text, Button, Image } from 'theme-ui'
import { useSelect } from 'downshift'

type DropdownItem = {
  name: string
  icon?: string
  pill?: React.ReactNode
}
interface DropdownProps {
  items: Array<DropdownItem>
  placeholder: string
}

export default function Dropdown ({ items, placeholder }: DropdownProps) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getItemProps
  } = useSelect({
    items
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
                  <Image src={item.icon} mr={2} sx={{ width: 4 }} />
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
