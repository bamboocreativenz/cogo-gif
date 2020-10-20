/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Image, Link as TUILink } from 'theme-ui'
import Link from 'next/link'

import FullWidthCentered from './FullWidthCentered'
import OneThenTwoColumns from './OneThenTwoColumns'
import ThemePill from './ThemePill'

type Accreditor = {
  Heading: string
  Bio: string
  Logo: Array<any>
  Site: string
  'Staff Image'?: Array<any>
  'Staff Name'?: string
  'Staff Role'?: string
  'Staff Quote'?: string
  Theme: 'Climate' | 'Waste' | 'Community' | 'Land & Water'
  Status: string
}

interface AccreditorsAndCertificationsProps {
  accreditors: Array<Accreditor> // TODO: type better
}

export default function AccreditorsAndCertifications ({
  accreditors
}: AccreditorsAndCertificationsProps) {
  return (
    <FullWidthCentered>
      <Flex px={[3, 5]} mb={5} sx={{ flexDirection: 'column' }}>
        <OneThenTwoColumns
          mb={4}
          firstColumnContent={
            <Heading variant='h1'>Accreditors & Certifications</Heading>
          }
          remainingContent={
            <Flex ml={[0, 4]} sx={{ flexDirection: 'column' }}>
              <Text variant='p3'>
                How do you know what you are doing in making a difference. We
                are partnering with 14 accreditors so we know that you are doing
                good and telling people about it.
              </Text>
            </Flex>
          }
        />

        <Flex py={3} sx={{ overflowX: 'scroll' }}>
          {accreditors.map((a, i) => {
            const staffImage = a['Staff Image']
            const staffName = a['Staff Name']
            const staffRole = a['Staff Role']
            const staffQuote = a['Staff Quote']

            return (
              <Flex
                key={i}
                p={3}
                mr={4}
                sx={{
                  flexDirection: 'column',
                  width: [300, staffName ? 500 : 300],
                  boxShadow: '0 0 4px 0 rgba(0,0,0,0.25)'
                }}
              >
                <Flex sx={{ justifyContent: 'space-between' }}>
                  <ThemePill theme={a.Theme} size='small' />
                  <Image
                    src={a.Logo[0].url}
                    ml={3}
                    sx={{ maxHeight: 5, maxWidth: 6 }}
                  />
                </Flex>

                <Heading variant='h2' sx={{ textTransform: 'uppercase' }}>
                  {a.Heading}
                </Heading>
                <Text variant='p3' mt={1}>
                  {a.Bio}
                </Text>

                <Flex
                  mt={3}
                  sx={{
                    flexDirection: ['column', 'row'],
                    justifyContent: staffName ? 'initial' : 'flex-end'
                  }}
                >
                  {staffQuote && (
                    <Text
                      variant='p4'
                      sx={{ display: ['initial', 'none'], color: 'light' }}
                    >
                      {staffQuote}
                    </Text>
                  )}
                  {staffImage && (
                    <Image src={staffImage[0].url} sx={{ maxWidth: 100 }} />
                  )}
                  <Flex
                    ml={3}
                    sx={{
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Text
                      variant='p4'
                      sx={{ display: ['none', 'initial'], color: 'light' }}
                    >
                      {staffQuote}
                    </Text>
                    <Flex
                      sx={{
                        flexDirection: ['column', 'row'],
                        justifyContent: [
                          'space-between',
                          staffName ? 'space-between' : 'flex-end'
                        ],
                        width: '100%'
                      }}
                    >
                      <Flex sx={{ flexDirection: 'column' }}>
                        <Text variant='h3' sx={{ color: 'light' }}>
                          {staffName}
                        </Text>
                        <Text variant='p5' sx={{ color: 'light' }}>
                          {staffRole}
                        </Text>
                      </Flex>
                      <Link href={a.Site} passHref>
                        <TUILink variant='site' target='_blank'>
                          VISIT SITE
                        </TUILink>
                      </Link>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            )
          })}
        </Flex>
      </Flex>
    </FullWidthCentered>
  )
}
