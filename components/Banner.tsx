/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import NextImage from 'next/image'

import FullWidthCentered from './FullWidthCentered'
import Nav from './Nav'
import Headline from './Headline'

interface BannerProps {
  backgroundImage: any
  backgroundImagePosition?: string
  headline: string
  subHeadline: string
}

export default function Banner ({
  backgroundImage,
  backgroundImagePosition = 'center',
  headline,
  subHeadline
}: BannerProps) {
  return (
    <Flex
      sx={{
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: [360, 8]
      }}
    >
      <NextImage
        src={backgroundImage[0].url}
        layout='fill'
        sx={{ objectFit: 'cover', objectPosition: backgroundImagePosition }}
      />
      <Flex
        sx={{
          position: 'absolute',
          top: 0,
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4))'
        }}
      >
        <Nav />
        <FullWidthCentered bg='none'>
          <Flex py={4} px={[3, 5]}>
            <Headline headline={headline} subHeadline={subHeadline} />
          </Flex>
        </FullWidthCentered>
      </Flex>
    </Flex>
  )
}
