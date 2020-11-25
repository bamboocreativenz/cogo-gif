/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Text, Image } from 'theme-ui'
import NextImage from 'next/image'

import OneThenTwoColumns from './OneThenTwoColumns'

interface PartnerProps {
  copy: any // TODO: type better
}

export default function Partner ({ copy }: PartnerProps) {
  return (
    <OneThenTwoColumns
      mt={5}
      firstColumnContent={
        <Flex
          mt={3}
          sx={{ justifyContent: 'center', height: 6, width: '100%' }}
        >
          <Box sx={{ position: 'relative', width: '100%', maxWidth: 7 }}>
            <NextImage
              src={copy.Image[0].url}
              alt='Image for Partner'
              layout='fill'
              sx={{ objectFit: 'contain', objectPosition: 'center top' }}
            />
          </Box>
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
