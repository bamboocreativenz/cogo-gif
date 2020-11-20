/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Text } from 'theme-ui'

import Dropdown from './Dropdown'
import IndustryReports from './IndustryReports'
import CaseStudies from './CaseStudies'
import AccreditorsAndCertifications from './AccreditorsAndCertifications'
import Latest from './Latest'
import Footer from './Footer'
import OneThenTwoColumns from './OneThenTwoColumns'

import themes from '../util/themes'
import industries from '../util/industries'
import FullWidthCentered from './FullWidthCentered'

const plainIndustries = Object.keys(industries).map(i => ({
  name: i,
  icon: industries[i].plain
}))

export default function ReportsCaseStudiesAccreditors ({
  commonContent,
  selectedIndustry,
  setSelectedIndustry,
  selectedTheme,
  setSelectedTheme,
  marketInsights,
  industryReports,
  caseStudies,
  accreditors
}) {
  return (
    <>
      <Box bg='greyBackground' sx={{ position: 'sticky', top: 0, zIndex: 10 }}>
        <FullWidthCentered bg='greyBackground'>
          <Flex px={[3, 5]} mt={4} sx={{ flexDirection: 'column' }}>
            <OneThenTwoColumns
              mb={4}
              firstColumnContent={
                <Text variant='button2' sx={{ flex: 1 }}>
                  FILTER BY:
                </Text>
              }
              remainingContent={
                <Flex
                  ml={[0, 4]}
                  sx={{
                    flex: 2,
                    justifyContent: 'space-between',
                    alignItems: 'flex-end'
                  }}
                >
                  <Flex mr={4} sx={{ flex: 1 }}>
                    <Dropdown
                      items={plainIndustries}
                      selectedItemName={selectedIndustry}
                      placeholder='Industry'
                      onChange={({ selectedItem }) =>
                        setSelectedIndustry(selectedItem.name)
                      }
                    />
                  </Flex>
                  <Flex ml={4} sx={{ flex: 1 }}>
                    <Dropdown
                      items={themes}
                      selectedItemName={selectedTheme}
                      placeholder='Theme'
                      onChange={({ selectedItem }) =>
                        setSelectedTheme(selectedItem.name)
                      }
                    />
                  </Flex>
                </Flex>
              }
            />
          </Flex>
        </FullWidthCentered>
      </Box>

      <IndustryReports
        copy={commonContent['Industry Reports']}
        download={commonContent['Download Industry Report']}
        marketInsights={marketInsights}
        industryReports={industryReports}
        selectedIndustry={selectedIndustry}
        selectedTheme={selectedTheme}
      />

      <CaseStudies
        caseStudies={caseStudies}
        copy={commonContent['Case Studies']}
        download={commonContent['Download Case Study']}
        selectedIndustry={selectedIndustry}
        selectedTheme={selectedTheme}
      />

      <AccreditorsAndCertifications
        accreditors={accreditors}
        copy={commonContent.Accreditors}
        selectedIndustry={selectedIndustry}
        selectedTheme={selectedTheme}
      />

      <Latest copy={commonContent.Latest} />

      <Footer
        logoWestpac={commonContent['Westpac'].Image}
        logoWWF={commonContent['WWF'].Image}
        logoBusinessGovtNZ={commonContent['business.govt.nz'].Image}
        logoSustainableBusinessNetwork={
          commonContent['Sustainable Business Network'].Image
        }
        logoCoGo={commonContent['CoGo'].Image}
      />
    </>
  )
}
