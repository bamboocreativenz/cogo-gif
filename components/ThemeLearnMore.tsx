/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Link as TUILink } from 'theme-ui'
import Link from 'next/link'

const titleColorMap = {
  CLIMATE: 'climate',
  WASTE: 'waste',
  COMMUNITY: 'community',
  'LAND & WATER': 'landAndWater'
}

interface ThemeLearnMoreProps {
  title: string
  text: string
  link: string
}

export default function ThemeLearnMore ({
  title,
  text,
  link
}: ThemeLearnMoreProps) {
  return (
    <Flex mx={[0, 4]} sx={{ flexDirection: 'column', width: ['100%', 8] }}>
      <Box py={2} px={3} bg={titleColorMap[title]} sx={{ borderRadius: 50 }}>
        <Heading variant='h1' sx={{ color: 'white' }}>
          {title}
        </Heading>
      </Box>
      <Text variant='p2'>{text}</Text>
      <Link href={link} passHref>
        <TUILink variant='learn'>LEARN MORE</TUILink>
      </Link>
    </Flex>
  )
}
