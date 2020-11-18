/** @jsxRuntime classic */
/** @jsx jsx */
import Link from 'next/link'
import NextImage from 'next/image'
import { jsx, Flex, Box, Text, Image, Link as TUILink } from 'theme-ui'

import FullWidthCentered from './FullWidthCentered'

interface FooterLogoProps {
  src: string
  alt: string
}

function FooterLogo ({ src, alt }: FooterLogoProps) {
  return (
    <Box
      mr={[0, 4]}
      mb={[4, 0]}
      sx={{
        position: 'relative',
        height: ['unset', 50],
        width: [100, '100%']
      }}
    >
      <NextImage
        src={src}
        alt={alt}
        layout='fill'
        sx={{ objectFit: 'contain', objectPosition: 'center' }}
      />
    </Box>
  )
}

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
          <FooterLogo src={logoWestpac[0].url} alt='Westpac' />
          <FooterLogo src={logoWWF[0].url} alt='WWF' />
          <FooterLogo src={logoBusinessGovtNZ[0].url} alt='Business.govt.nz' />
          <FooterLogo
            src={logoSustainableBusinessNetwork[0].url}
            alt='Sustainable Business Network'
          />
          <FooterLogo src={logoCoGo[0].url} alt='CoGo' />
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
