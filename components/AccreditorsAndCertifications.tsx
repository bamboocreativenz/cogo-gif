/** @jsx jsx */
import {
  jsx,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Link as TUILink,
  Button
} from 'theme-ui'
import { useRef } from 'react'
import NextImage from 'next/image'
import Link from 'next/link'

import FullWidthCentered from './FullWidthCentered'
import OneThenTwoColumns from './OneThenTwoColumns'
import ThemePill from './ThemePill'

type Accreditor = {
  id: string
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
  copy: any // TODO: type better
  selectedTheme: string
}

export default function AccreditorsAndCertifications ({
  accreditors,
  copy,
  selectedTheme
}: AccreditorsAndCertificationsProps) {
  const scrollContainer = useRef(null)

  const handleScrollContainer = (direction: string) => () => {
    // N.B. this isn't a perfect calculation, but it's close
    const insightWidth =
      scrollContainer.current.scrollWidth / accreditors.length +
      accreditors.length

    scrollContainer.current.scroll({
      left:
        direction === 'left'
          ? scrollContainer.current.scrollLeft + insightWidth - 14
          : scrollContainer.current.scrollLeft - insightWidth - 14,
      behavior: 'smooth'
    })
  }

  return (
    <FullWidthCentered bg='greyBackground'>
      <Flex px={[3, 5]} mb={5} sx={{ flexDirection: 'column' }}>
        <OneThenTwoColumns
          mb={4}
          firstColumnContent={<Heading variant='h1'>{copy.Title}</Heading>}
          remainingContent={
            <Flex ml={[0, 4]} sx={{ flexDirection: 'column' }}>
              <Text variant='p3'>{copy.Content}</Text>
            </Flex>
          }
        />

        <Flex sx={{ position: 'relative' }}>
          <Button
            onClick={handleScrollContainer('right')}
            variant='tertiary'
            bg='initial'
            sx={{ position: 'absolute', left: 0, top: [268, 220], zIndex: 100 }}
          >
            <Image src='/icons/chevron-left.svg' sx={{ height: 5 }} />
          </Button>
          <Flex
            ref={scrollContainer}
            py={3}
            px={1}
            sx={{ overflowX: 'scroll' }}
          >
            {accreditors
              .filter(a => (selectedTheme ? a.Theme === selectedTheme : a))
              .map(a => {
                const staffImage = a['Staff Image']
                const staffName = a['Staff Name']
                const staffRole = a['Staff Role']
                const staffQuote = a['Staff Quote']

                return (
                  <Flex
                    key={a.id}
                    bg='white'
                    p={3}
                    mr={4}
                    sx={{
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minWidth: [300, staffName ? 500 : 300],
                      maxWidth: [300, staffName ? 500 : 300],
                      boxShadow: '0 0 4px 0 rgba(0,0,0,0.25)'
                    }}
                  >
                    <Box>
                      <Flex mb={2} sx={{ justifyContent: 'space-between' }}>
                        <ThemePill theme={a.Theme} size='small' />
                        <Flex
                          ml={3}
                          sx={{
                            flex: 1,
                            position: 'relative',
                            justifyContent: 'flex-end',
                            height: 5,
                            maxWidth: 6
                          }}
                        >
                          <NextImage
                            src={a.Logo[0].url}
                            alt={a.Heading}
                            layout='fill'
                            sx={{
                              objectFit: 'contain',
                              objectPosition: 'right'
                            }}
                          />
                        </Flex>
                      </Flex>

                      <Heading variant='h2' sx={{ textTransform: 'uppercase' }}>
                        {a.Heading}
                      </Heading>
                      <Text variant='p3' mt={1}>
                        {a.Bio}
                      </Text>
                    </Box>

                    <Flex
                      mt={[2, 3]}
                      sx={{
                        flexDirection: ['column', 'row'],
                        justifyContent: staffName ? 'initial' : 'flex-end'
                      }}
                    >
                      {staffQuote && (
                        <Text
                          variant='quote'
                          sx={{ display: ['initial', 'none'], color: 'light' }}
                        >
                          {staffQuote}
                        </Text>
                      )}
                      <Flex sx={{ flexDirection: 'row' }}>
                        {staffImage && (
                          <Box
                            mt={2}
                            sx={{
                              position: 'relative',
                              minWidth: 108,
                              height: 146
                            }}
                          >
                            <NextImage
                              src={staffImage[0].url}
                              alt={staffName}
                              layout='fill'
                              sx={{ objectFit: 'cover', objectPosition: 'top' }}
                            />
                          </Box>
                        )}
                        <Flex
                          ml={staffName ? 3 : 0}
                          sx={{
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                          }}
                        >
                          {staffQuote && (
                            <Text
                              variant='quote'
                              mt={[0, 2]}
                              sx={{
                                display: ['none', 'initial'],
                                color: 'light'
                              }}
                            >
                              {staffQuote}
                            </Text>
                          )}
                          <Flex
                            sx={{
                              flexDirection: ['column', 'row'],
                              justifyContent: [
                                'space-between',
                                staffName ? 'space-between' : 'flex-end'
                              ],
                              width: '100%',
                              height: ['100%', 'initial']
                            }}
                          >
                            <Flex mt={[2, 0]} sx={{ flexDirection: 'column' }}>
                              {staffName && (
                                <Text variant='h3' sx={{ color: 'light' }}>
                                  {staffName}
                                </Text>
                              )}
                              {staffRole && (
                                <Text variant='p5' sx={{ color: 'light' }}>
                                  {staffRole}
                                </Text>
                              )}
                            </Flex>
                            <Box>
                              <Link href={a.Site} passHref>
                                <TUILink
                                  variant='site'
                                  target='_blank'
                                  rel='noopener'
                                >
                                  VISIT SITE
                                </TUILink>
                              </Link>
                            </Box>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                )
              })}
          </Flex>
          <Button
            onClick={handleScrollContainer('left')}
            variant='tertiary'
            bg='initial'
            sx={{
              position: 'absolute',
              right: 0,
              top: [268, 220],
              zIndex: 100
            }}
          >
            <Image src='/icons/chevron-right.svg' sx={{ height: 5 }} />
          </Button>
        </Flex>
      </Flex>
    </FullWidthCentered>
  )
}
