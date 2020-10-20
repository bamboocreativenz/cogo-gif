/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Image, Button } from 'theme-ui'

import FullWidthCentered from './FullWidthCentered'
import OneThenTwoColumns from './OneThenTwoColumns'

interface CaseStudiesProps {
  caseStudies: any // TODO: type better
}

export default function CaseStudies ({ caseStudies }: CaseStudiesProps) {
  console.log({ caseStudies })

  return (
    <FullWidthCentered>
      <Flex px={[3, 5]} mb={5} sx={{ flexDirection: 'column' }}>
        <OneThenTwoColumns
          mb={4}
          firstColumnContent={<Heading variant='h1'>Case Studies</Heading>}
          remainingContent={
            <Flex ml={[0, 4]} sx={{ flexDirection: 'column' }}>
              <Text variant='p3'>
                Check out what businesses are doing to make good impact.
              </Text>
            </Flex>
          }
        />

        <Flex py={3} sx={{ overflowX: 'scroll' }}>
          {caseStudies.map((cs, i) => {
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
                sx={{
                  flexDirection: 'column',
                  minWidth: 500,
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
                    flexDirection: 'column'
                  }}
                >
                  <Flex sx={{ justifyContent: 'space-between' }}>
                    <Text>{bio}</Text>
                    <Image src={logo} ml={3} sx={{ maxWidth: 6 }} />
                  </Flex>
                  <Flex sx={{ justifyContent: 'space-between' }}>
                    <Button variant='tertiary'>{cta}</Button>
                    <Flex>
                      <Box mr={3}>{theme}</Box>
                      <Box>{industry}</Box>
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
