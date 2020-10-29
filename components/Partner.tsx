/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Text, Image } from 'theme-ui'

import OneThenTwoColumns from './OneThenTwoColumns'

interface PartnerProps {
  copy: any // TODO: type better
}

export default function Partner ({ copy }: PartnerProps) {
  return (
    <OneThenTwoColumns
      mt={5}
      firstColumnContent={
        <Flex sx={{ justifyContent: 'center', width: '100%' }}>
          <Image src={copy.Image[0].url} sx={{ maxHeight: 6, maxWidth: 7 }} />
        </Flex>
      }
      remainingContent={
        <Flex ml={[0, 4]} mt={[4, 0]} sx={{ flexDirection: 'column' }}>
          <Text
            variant='h1'
            mb={3}
            sx={{ whiteSpace: 'pre-wrap', textTransform: 'uppercase' }}
            dangerouslySetInnerHTML={{ __html: copy.Title }}
          />
          <Text
            variant='p2'
            sx={{ whiteSpace: 'pre-wrap' }}
            dangerouslySetInnerHTML={{ __html: copy.Content }}
          />
        </Flex>
      }
      sx={{
        alignItems: ['center', 'flex-start']
      }}
    />
  )
}
