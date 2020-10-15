/** @jsx jsx */
import { jsx, Flex, Heading, Image, NavLink } from 'theme-ui'

import Banner from '../components/Banner'

export default function About () {
  return (
    <Banner
      backgroundImage='/images/banner.png'
      headline='About headline'
      subHeadline='About subtitle explaining the about page...'
    />
  )
}
