import { useState } from 'react'

interface UseFilters {
  initialTheme?: string
}

export default function useFilters ({ initialTheme = '' }: UseFilters) {
  const [selectedIndustries, setSelectedIndustries] = useState([])
  const [selectedTheme, setSelectedTheme] = useState(initialTheme)

  return {
    selectedIndustries,
    setSelectedIndustries,
    selectedTheme,
    setSelectedTheme
  }
}
