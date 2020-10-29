/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Text, Link as TUILink } from 'theme-ui'
import Link from 'next/link'

import ThemePill from './ThemePill'

interface ThemeLearnMoreProps {
  title: 'Climate' | 'Waste' | 'Community' | 'Land & Water'
  text: string
  link: string
}

export default function ThemeLearnMore ({
  title,
  text,
  link
}: ThemeLearnMoreProps) {
  return (
    <Flex
      mx={[0, 4]}
      my={4}
      sx={{ flexDirection: 'column', width: ['100%', 8] }}
    >
      <Flex mb={3}>
        <ThemePill theme={title} size='large' />
      </Flex>
      <Text variant='p2'>{text}</Text>
      <Box mt={3}>
        <Link href={link} passHref>
          <TUILink variant='learn'>LEARN MORE</TUILink>
        </Link>
      </Box>
    </Flex>
  )
}
