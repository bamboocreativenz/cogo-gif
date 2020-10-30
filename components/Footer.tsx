/** @jsxRuntime classic */
/** @jsx jsx */
import Link from 'next/link'
import { jsx, Flex, Box, Text, Image, Link as TUILink } from 'theme-ui'

import FullWidthCentered from './FullWidthCentered'

interface FooterProps {
  logoWestpac: any
  logoWWF: any
  logoBusinessGovtNZ: any
  logoSustainableBusinessNetwork: any
  logoCoGo: any
}

export default function Footer ({
  logoWestpac,
  logoWWF,
  logoBusinessGovtNZ,
  logoSustainableBusinessNetwork,
  logoCoGo
}: FooterProps) {
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
            src={logoWestpac[0].url}
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
            src={logoWWF[0].url}
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
            src={logoBusinessGovtNZ[0].url}
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
            src={logoSustainableBusinessNetwork[0].url}
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
            src={logoCoGo[0].url}
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
