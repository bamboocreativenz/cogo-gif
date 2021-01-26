/*

Component that centers a max-width column Flex that will contain children within an outer Flex that streches across the viewport. Primarily useful for extending a background color across the screen at any viewport size, but retaining a max width on the main flow of the app.

*/

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

interface FullWidthCentered {
  children: React.ReactNode // TODO: make more specific?
  bg?: string
  height?: string | number
}

export default function FullWidthCentered ({
  children,
  bg = 'white',
  height = 'initial'
}: FullWidthCentered) {
  return (
    <Flex
      bg={bg}
      sx={{
        width: '100%',
        height,
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Flex
        bg={bg}
        sx={{
          flexDirection: 'column',
          width: '100%',
          height,
          maxWidth: theme => theme.maxWidth
        }}
      >
        {children}
      </Flex>
    </Flex>
  )
}
