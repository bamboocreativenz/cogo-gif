/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

import IndustryReports from './IndustryReports'
import CaseStudies from './CaseStudies'
import AccreditorsAndCertifications from './AccreditorsAndCertifications'
import Latest from './Latest'
import Footer from './Footer'

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
      <IndustryReports
        copy={commonContent['Industry Reports']}
        download={commonContent['Download Industry Report']}
        marketInsights={marketInsights}
        industryReports={industryReports}
        selectedIndustry={selectedIndustry}
        setSelectedIndustry={setSelectedIndustry}
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
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
