/** @jsxRuntime classic */
/** @jsx jsx */
import Link from 'next/link'
import { jsx, Flex, Box, Text, Image, Link as TUILink } from 'theme-ui'

import FullWidthCentered from './FullWidthCentered'

interface FooterProps {}

export default function Footer ({}: FooterProps) {
  return (
    <FullWidthCentered bg='text'>
      <Flex
        px={[5, 6]}
        py={5}
        sx={{ flexDirection: 'column', alignItems: ['center', 'initial'] }}
      >
        <Text variant='h3' sx={{ color: 'white' }}>
          Brought to you by
        </Text>
        <Flex
          mt={4}
          sx={{
            flexDirection: ['column', 'row'],
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Image
            mr={[0, 4]}
            mb={[4, 0]}
            src='/images/westpac.png'
            sx={{
              flex: 1,
              maxHeight: ['none', 50],
              maxWidth: [100, 'none'],
              objectFit: 'contain'
            }}
          />
          <Image
            mx={[0, 4]}
            mb={[4, 0]}
            src='/images/wwf.png'
            sx={{
              flex: 1,
              maxHeight: ['none', 50],
              maxWidth: [100, 'none'],
              objectFit: 'contain'
            }}
          />
          <Image
            mx={[0, 4]}
            mb={[4, 0]}
            src='/images/business-govt-nz.png'
            sx={{
              flex: 1,
              maxHeight: ['none', 50],
              maxWidth: [100, 'none'],
              objectFit: 'contain'
            }}
          />
          <Image
            mx={[0, 4]}
            mb={[4, 0]}
            src='/images/sustainable-business-network.png'
            sx={{
              flex: 1,
              maxHeight: ['none', 50],
              maxWidth: [100, 'none'],
              objectFit: 'contain'
            }}
          />
          <Image
            ml={[0, 4]}
            mb={[4, 0]}
            src='/images/cogo.png'
            sx={{
              flex: 1,
              maxHeight: ['none', 50],
              maxWidth: [100, 'none'],
              objectFit: 'contain'
            }}
          />
        </Flex>
        <Flex
          mt={4}
          sx={{
            flexDirection: 'column',
            alignItems: ['flex-start', 'flex-end']
          }}
        >
          <Text variant='p3' sx={{ color: 'white' }}>
            Contact
          </Text>
          <Link href='mailto:info@goodimpactframework.org' passHref>
            <TUILink variant='nav'>info@goodimpactframework.org</TUILink>
          </Link>
        </Flex>
      </Flex>
    </FullWidthCentered>
  )
}
