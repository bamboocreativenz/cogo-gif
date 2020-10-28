import { Dispatch, SetStateAction } from 'react'

interface DownloadPDF {
  pdfType: 'Case Study' | 'Industry Report'
  selected: Array<any> // TODO: type better
  email: string
  setDownloading: Dispatch<SetStateAction<boolean>>
  setDownloadSuccess: Dispatch<SetStateAction<boolean | null>>
}

export default function downloadPDF ({
  pdfType,
  selected,
  email,
  setDownloading,
  setDownloadSuccess
}: DownloadPDF) {
  setDownloading(true)
  setDownloadSuccess(null)
  console.log({ selected })
  return window
    .fetch('/api/download-pdf', {
      method: 'POST',
      body: JSON.stringify({ pdfType, ids: selected.map(s => s.id), email }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      setDownloading(false)
      if (!res.ok) {
        setDownloadSuccess(false)
      } else {
        setDownloadSuccess(true)
        selected.forEach(s => window.open(s.Link))
        // window.open(caseStudy.Link)
      }
    })
    .catch(err => {
      setDownloading(false)
      setDownloadSuccess(false)
    })
}
