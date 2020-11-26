/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Text, Button, Image } from 'theme-ui'
import { useSelect } from 'downshift'
import truncate from 'lodash/truncate'

const chevronDown = require('../public/icons/chevron-down.png')

type DropdownItem = {
  name: string
  icon?: string
  pill?: React.ReactNode
}
interface InternalDropdownProps {
  controlledSelectedItem?: string
  items: Array<DropdownItem>
  placeholder: string
  onChange: any // TODO: type better
}

export function InternalDropdown ({
  controlledSelectedItem,
  items,
  placeholder,
  onChange
}: InternalDropdownProps) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getItemProps
  } = useSelect({
    items,
    initialSelectedItem: controlledSelectedItem
      ? items.find(i => i.name === controlledSelectedItem)
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

// N.B. taken from https://www.downshift-js.com/use-select
function stateReducer (state, actionAndChanges) {
  const { changes, type } = actionAndChanges
  switch (type) {
    case useSelect.stateChangeTypes.MenuKeyDownEnter:
    case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
    case useSelect.stateChangeTypes.ItemClick:
      return {
        ...changes,
        isOpen: true, // keep menu open after selection.
        highlightedIndex: state.highlightedIndex
      }
    default:
      return changes
  }
}

interface InternalDropdownMultipleProps {
  controlledSelectedItems?: Array<string>
  items: Array<DropdownItem>
  placeholder: string
  onChange: any // TODO: type better
}

export function InternalDropdownMultiple ({
  controlledSelectedItems,
  items,
  placeholder,
  onChange
}: InternalDropdownMultipleProps) {
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getItemProps
  } = useSelect({
    items,
    stateReducer,
    selectedItem: null,
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
          {(controlledSelectedItems.length > 0 &&
            truncate(controlledSelectedItems.join(', '), { length: 20 })) ||
            placeholder}
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
              bg={
                controlledSelectedItems.includes(item.name) ? 'grey' : 'initial'
              }
              sx={{
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover': {
                  bg: controlledSelectedItems.includes(item.name)
                    ? 'lightGrey'
                    : 'greyBackground'
                }
              }}
            >
              <Flex sx={{ alignItems: 'center' }}>
                <Image src={item.icon} mr={3} sx={{ width: 4, minWidth: 4 }} />
                <Text>{item.name}</Text>
              </Flex>
            </Flex>
          ))}
      </Flex>
    </Flex>
  )
}

interface DropdownProps {
  controlledSelectedItem?: string
  controlledSelectedItems?: Array<string>
  items: Array<DropdownItem>
  placeholder: string
  onChange: any // TODO: type better
  multiple?: boolean
}

export default function Dropdown ({
  multiple = false,
  ...rest
}: DropdownProps) {
  if (multiple) {
    return <InternalDropdownMultiple {...rest} />
  } else {
    return <InternalDropdown {...rest} />
  }
}
