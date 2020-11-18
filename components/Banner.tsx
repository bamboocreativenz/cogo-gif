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
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4))'
        }}
      >
        <FullWidthCentered bg='none' height='100%'>
          <Flex
            sx={{
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between'
            }}
          >
            <Nav />
            <Flex py={4} px={[3, 5]}>
              <Headline headline={headline} subHeadline={subHeadline} />
            </Flex>
          </Flex>
        </FullWidthCentered>
      </Flex>
    </Flex>
  )
}
