/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'

interface OneThenTwoColumnsProps {
  firstColumnContent: React.ReactNode // TODO: make more specific?
  remainingContent: React.ReactNode // TODO: make more specific?
  [key: string]: any // N.B. needed to pass through any ThemeUI props, unless there's a better way of typing this?
}

export default function OneThenTwoColumns ({
  firstColumnContent,
  remainingContent,
  ...rest
}: OneThenTwoColumnsProps) {
  return (
    <Flex
      sx={{
        flexDirection: ['column', 'row'],
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}
      {...rest}
    >
      <Box sx={{ flex: 1 }}>{firstColumnContent}</Box>
      <Box sx={{ flex: 2, width: ['100%', 'unset'] }}>{remainingContent}</Box>
    </Flex>
  )
}
