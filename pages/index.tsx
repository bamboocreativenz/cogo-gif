/** @jsx jsx */
import { jsx, Flex, Heading, Image, NavLink } from 'theme-ui'

import FullWidthCentered from '../components/FullWidthCentered'
import Nav from '../components/Nav'
import Headline from '../components/Headline'

export default function Home () {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundImage: 'url(/images/banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: [360, 8]
      }}
    >
      <Nav />
      <FullWidthCentered bg='none'>
        <Flex py={4} px={[3, 5]}>
          <Headline
            headline='Create impact your customers will value'
            subHeadline='People are making more purchases from businesses that are taking action on issues they care about.'
          />
        </Flex>
      </FullWidthCentered>
    </Flex>
  )
}
