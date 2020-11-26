/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Text } from 'theme-ui'
import { Dispatch, SetStateAction } from 'react'
import without from 'lodash/without'

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

import useFilters from '../hooks/useFilters'

const plainIndustries = Object.keys(industries).map(i => ({
  name: i,
  icon: industries[i].plain
}))

interface ReportsCaseStudiesAccreditorsProps {
  commonContent: any
  marketInsights: any
  industryReports: any
  caseStudies: any
  accreditors: any
}

export default function ReportsCaseStudiesAccreditors ({
  commonContent,
  marketInsights,
  industryReports,
  caseStudies,
  accreditors
}: ReportsCaseStudiesAccreditorsProps) {
  const {
    selectedIndustries,
    setSelectedIndustries,
    selectedTheme,
    setSelectedTheme
  } = useFilters()
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
                      multiple
                      items={plainIndustries}
                      controlledSelectedItems={selectedIndustries}
                      placeholder='Industry'
                      onChange={({ selectedItem }) => {
                        if (selectedIndustries.includes(selectedItem.name)) {
                          setSelectedIndustries(
                            without(selectedIndustries, selectedItem.name)
                          )
                        } else {
                          setSelectedIndustries(
                            selectedIndustries.concat(selectedItem.name)
                          )
                        }
                      }}
                    />
                  </Flex>
                  <Flex ml={4} sx={{ flex: 1 }}>
                    <Dropdown
                      items={themes}
                      controlledSelectedItem={selectedTheme}
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
        selectedIndustries={selectedIndustries}
        selectedTheme={selectedTheme}
      />

      <CaseStudies
        caseStudies={caseStudies}
        copy={commonContent['Case Studies']}
        download={commonContent['Download Case Study']}
        selectedIndustries={selectedIndustries}
        selectedTheme={selectedTheme}
      />

      <AccreditorsAndCertifications
        accreditors={accreditors}
        copy={commonContent.Accreditors}
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
