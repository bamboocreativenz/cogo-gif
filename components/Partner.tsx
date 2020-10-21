/** @jsx jsx */
import { jsx, Flex, Text, Image } from 'theme-ui'

import OneThenTwoColumns from './OneThenTwoColumns'

interface PartnerProps {
  partner: any // TODO: type better
}

export default function Partner ({ partner }: PartnerProps) {
  return (
    <OneThenTwoColumns
      mt={5}
      firstColumnContent={
        <Flex sx={{ justifyContent: 'center' }}>
          <Image src={partner.Image[0].url} sx={{ maxHeight: 6 }} />
        </Flex>
      }
      remainingContent={
        <Flex ml={[0, 4]} sx={{ flexDirection: 'column' }}>
          <Text
            variant='h1'
            mb={3}
            sx={{ whiteSpace: 'pre-wrap', textTransform: 'uppercase' }}
            dangerouslySetInnerHTML={{ __html: partner.Title }}
          />
          <Text
            variant='p3'
            sx={{ whiteSpace: 'pre-wrap' }}
            dangerouslySetInnerHTML={{ __html: partner.Content }}
          />
        </Flex>
      }
    />
  )
}
