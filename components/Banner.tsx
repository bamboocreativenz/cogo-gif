/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

import FullWidthCentered from './FullWidthCentered'
import Nav from './Nav'
import Headline from './Headline'

interface BannerProps {
  backgroundImage: string
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
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: backgroundImagePosition,
        height: [360, 8]
      }}
    >
      <Nav />
      <FullWidthCentered bg='none'>
        <Flex py={4} px={[3, 5]}>
          <Headline headline={headline} subHeadline={subHeadline} />
        </Flex>
      </FullWidthCentered>
    </Flex>
  )
}
