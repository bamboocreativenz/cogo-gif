/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Image, Button } from 'theme-ui'

import FullWidthCentered from './FullWidthCentered'
import OneThenTwoColumns from './OneThenTwoColumns'
import ThemePill from './ThemePill'

interface CaseStudiesProps {
  caseStudies: any // TODO: type better
  copy: any // TODO: type better
  selectedIndustry: string
  selectedTheme: string
}

export default function CaseStudies ({
  caseStudies,
  copy,
  selectedIndustry,
  selectedTheme
}: CaseStudiesProps) {
  return (
    <FullWidthCentered bg='greyBackground'>
      <Flex px={[3, 5]} mb={5} mt={4} sx={{ flexDirection: 'column' }}>
        <OneThenTwoColumns
          mb={4}
          firstColumnContent={<Heading variant='h1'>{copy.Title}</Heading>}
          remainingContent={
            <Flex ml={[0, 4]} sx={{ flexDirection: 'column' }}>
              <Text variant='p3'>{copy.Content}</Text>
            </Flex>
          }
        />

        <Flex py={3} px={1} sx={{ overflowX: 'scroll' }}>
          {caseStudies
            .filter(cs =>
              selectedTheme && selectedIndustry
                ? cs.Theme === selectedTheme && cs.Industry === selectedIndustry
                : selectedTheme
                ? cs.Theme === selectedTheme
                : selectedIndustry
                ? cs.Industry === selectedIndustry
                : cs
            )
            .map((cs, i) => {
              const banner =
                (cs['Prod Banner Image'] && cs['Prod Banner Image'][0].url) ||
                '/images/case-study-banner-mevo.png'
              const logo =
                (cs['Logo Image'] && cs['Logo Image'][0].url) ||
                '/images/case-study-logo-mevo.png'
              const bio = cs['Prod Bio'] || 'insert bio here'
              const cta = cs['Call To Action Text'] || 'DOWNLOAD FULL'
              const industry = cs['Industry'] || 'industry'
              const theme = cs['Theme'] || 'theme'

              return (
                <Flex
                  key={i}
                  mr={4}
                  bg='white'
                  sx={{
                    flexDirection: 'column',
                    minWidth: [300, 500],
                    boxShadow: '0 0 4px 0 rgba(0,0,0,0.25)'
                  }}
                >
                  <Flex sx={{ position: 'relative' }}>
                    <Heading
                      variant='h2'
                      sx={{
                        position: 'absolute',
                        bottom: 2,
                        left: 3,
                        color: 'white'
                      }}
                    >
                      {cs['Prod Heading']}
                    </Heading>
                    <Image src={banner} />
                  </Flex>

                  <Flex
                    p={3}
                    sx={{
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%'
                    }}
                  >
                    <Flex sx={{ justifyContent: 'space-between' }}>
                      <Text variant='p3'>{bio}</Text>
                      <Image
                        src={logo}
                        ml={3}
                        sx={{ display: ['none', 'initial'], maxWidth: 6 }}
                      />
                    </Flex>
                    <Flex
                      sx={{
                        flexDirection: ['column', 'row'],
                        justifyContent: 'space-between',
                        alignItems: 'flex-start'
                      }}
                    >
                      <Button variant='tertiary'>{cta}</Button>
                      <Flex sx={{ alignItems: 'center' }}>
                        <Box mr={3}>
                          <ThemePill theme={theme} size='small' />
                        </Box>
                        <Box>{industry}</Box>
                        <Image
                          src={logo}
                          ml={3}
                          sx={{ display: ['initial', 'none'], maxWidth: 5 }}
                        />
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
