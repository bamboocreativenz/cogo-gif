/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Link as TUILink } from 'theme-ui'
import Link from 'next/link'

import Banner from '../components/Banner'
import ThemeLearnMore from '../components/ThemeLearnMore'
import IndustryReports from '../components/IndustryReports'
import CaseStudies from '../components/CaseStudies'

export default function Home () {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Banner
        backgroundImage='/images/banner.png'
        headline='Create impact your customers will value'
        subHeadline='People are making more purchases from businesses that are taking action on issues they care about.'
      />

      <Flex
        px={[3, 5]}
        sx={{ width: '100%', flexDirection: 'column', alignItems: 'center' }}
      >
        <Flex my={4} sx={{ flexDirection: ['column', 'row'] }}>
          <ThemeLearnMore
            title='CLIMATE'
            text='The Climate theme focuses on businesses that are demonstrating improving their relationship with the climate and reducing impacts. This may be through demonstrating reductions in CO2 emissions, becoming carbon neutral or even positive.'
            link='/climate'
          />
          <ThemeLearnMore
            title='WASTE'
            text='The Climate theme focuses on businesses that are demonstrating improving their relationship with the climate and reducing impacts. This may be through demonstrating reductions in CO2 emissions, becoming carbon neutral or even positive.'
            link='/waste'
          />
        </Flex>

        <Flex my={4} sx={{ flexDirection: ['column', 'row'] }}>
          <ThemeLearnMore
            title='COMMUNITY'
            text='The Climate theme focuses on businesses that are demonstrating improving their relationship with the climate and reducing impacts. This may be through demonstrating reductions in CO2 emissions, becoming carbon neutral or even positive.'
            link='/community'
          />
          <ThemeLearnMore
            title='LAND & WATER'
            text='The Climate theme focuses on businesses that are demonstrating improving their relationship with the climate and reducing impacts. This may be through demonstrating reductions in CO2 emissions, becoming carbon neutral or even positive.'
            link='/land-and-water'
          />
        </Flex>
      </Flex>

      <IndustryReports />

      <CaseStudies />
    </Flex>
  )
}
