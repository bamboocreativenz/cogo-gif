/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Text } from 'theme-ui'

const themeMap = {
  climate: 'climate',
  waste: 'waste',
  community: 'community',
  'land & water': 'landAndWater'
}

interface ThemePillProps {
  theme: 'Climate' | 'Waste' | 'Community' | 'Land & Water'
  size: 'large' | 'small'
}

export default function ThemePill ({ theme, size }: ThemePillProps) {
  return (
    <Box>
      <Flex
        py={2}
        px={3}
        bg={themeMap[theme.toLowerCase()]}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50
        }}
      >
        <Text
          variant={size === 'large' ? 'h1' : 'smallBold'}
          sx={{ color: 'white', textTransform: 'uppercase' }}
        >
          {theme}
        </Text>
      </Flex>
    </Box>
  )
}
