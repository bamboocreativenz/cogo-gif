/** @jsx jsx */
import { jsx, Flex, Heading, Image, NavLink } from 'theme-ui'

import Banner from '../components/Banner'

export default function Home () {
  return (
    <Banner
      backgroundImage='/images/banner.png'
      headline='Create impact your customers will value'
      subHeadline='People are making more purchases from businesses that are taking action on issues they care about.'
    />
  )
}
