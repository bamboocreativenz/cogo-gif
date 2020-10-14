/** @jsx jsx */
import { jsx, Flex, Heading, Text } from 'theme-ui'

interface HeadlineProps {
  headline: string
  subHeadline: string
}

export default function Headline ({ headline, subHeadline }: HeadlineProps) {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Heading variant='h1' mb={2} sx={{ color: 'white' }}>
        {headline}
      </Heading>
      <Text variant='p1' sx={{ color: 'white' }}>
        {subHeadline}
      </Text>
    </Flex>
  )
}
