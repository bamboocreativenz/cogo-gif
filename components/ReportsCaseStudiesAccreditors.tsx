/** @jsx jsx */
import { jsx } from 'theme-ui'

import IndustryReports from './IndustryReports'
import CaseStudies from './CaseStudies'
import AccreditorsAndCertifications from './AccreditorsAndCertifications'
import Latest from './Latest'
import Footer from './Footer'

export default function ReportsCaseStudiesAccreditors ({
  page,
  selectedIndustry,
  setSelectedIndustry,
  selectedTheme,
  setSelectedTheme,
  marketInsights,
  caseStudies,
  accreditors
}) {
  return (
    <>
      <IndustryReports
        copy={page['Industry Reports']}
        download={page['Download Industry Report']}
        marketInsights={marketInsights}
        selectedIndustry={selectedIndustry}
        setSelectedIndustry={setSelectedIndustry}
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
      />

      <CaseStudies
        caseStudies={caseStudies}
        copy={page['Case Studies']}
        download={page['Download Case Study']}
        selectedIndustry={selectedIndustry}
        selectedTheme={selectedTheme}
      />

      <AccreditorsAndCertifications
        accreditors={accreditors}
        copy={page.Accreditors}
        selectedIndustry={selectedIndustry}
        selectedTheme={selectedTheme}
      />

      <Latest copy={page.Latest} />

      <Footer />
    </>
  )
}
