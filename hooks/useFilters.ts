import { useState } from 'react'

export default function useFilters () {
  const [selectedIndustries, setSelectedIndustries] = useState([])
  const [selectedTheme, setSelectedTheme] = useState('')

  return {
    selectedIndustries,
    setSelectedIndustries,
    selectedTheme,
    setSelectedTheme
  }
}
