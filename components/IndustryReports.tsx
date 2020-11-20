/** @jsxRuntime classic */
/** @jsx jsx */
import {
  useThemeUI,
  jsx,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Input,
  Link
} from 'theme-ui'
import NextImage from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'
import Modal from 'react-modal'
import without from 'lodash/without'

import { EmailZ } from '../types/util'

import FullWidthCentered from './FullWidthCentered'
import OneThenTwoColumns from './OneThenTwoColumns'

import industries from '../util/industries'
import downloadPDF from '../util/downloadPDF'

import { EMAIL_STORAGE_KEY } from '../constants'

const plainIndustries = Object.keys(industries).map(i => ({
  name: i,
  icon: industries[i].plain
}))

function getHandleSelectIndustry ({
  selectedIndustries,
  setSelectedIndustries,
  industry
}) {
  return function handleSelectIndustry () {
    if (selectedIndustries.includes(industry)) {
      setSelectedIndustries(without(selectedIndustries, industry))
    } else {
      setSelectedIndustries(selectedIndustries.concat(industry))
    }
  }
}

interface IndustryReportsProps {
  copy: any // TODO: type better
  download: any // TODO: type better
  marketInsights: any // TODO: type better
  industryReports: any // TODO: type better
  selectedIndustry: string
  selectedTheme: string
}

export default function IndustryReports ({
  copy,
  download,
  marketInsights,
  industryReports,
  selectedIndustry,
  selectedTheme
}: IndustryReportsProps) {
  const { theme } = useThemeUI()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedIndustries, setSelectedIndustries] = useState([])
  const [downloading, setDownloading] = useState(false)
  const [downloadSuccess, setDownloadSuccess] = useState(null)
  const { register, handleSubmit, errors, setValue } = useForm({
    // @ts-expect-error
    resolver: values => {
      try {
        EmailZ.parse(values.email)
        return {
          values,
          errors: {}
        }
      } catch (err) {
        return {
          values: {},
          errors: {
            email: err.errors[0].message
          }
        }
      }
    }
  })

  return (
    <FullWidthCentered bg='greyBackground'>
      <Flex px={[3, 5]} my={5} sx={{ flexDirection: 'column' }}>
        <OneThenTwoColumns
          mb={4}
          firstColumnContent={<Heading variant='h1'>{copy.Title}</Heading>}
          remainingContent={
            <Flex ml={[0, 4]} sx={{ flexDirection: 'column' }}>
              <Text variant='p3'>{copy.Content}</Text>
              <Flex
                mt={3}
                sx={{ display: ['none', 'initial'], flexDirection: 'column' }}
              >
                <Button variant='primary' onClick={() => setIsModalOpen(true)}>
                  DOWNLOAD REPORT
                </Button>
              </Flex>
            </Flex>
          }
        />

        <Flex py={4} sx={{ overflowX: 'scroll' }}>
          {marketInsights
            .filter(mi =>
              selectedTheme && selectedIndustry
                ? mi.Themes &&
                  mi.Themes.includes(selectedTheme) &&
                  mi.Industries &&
                  mi.Industries.includes(selectedIndustry)
                : selectedTheme
                ? mi.Themes && mi.Themes.includes(selectedTheme)
                : selectedIndustry
                ? mi.Industries && mi.Industries.includes(selectedIndustry)
                : mi
            )
            .map((mi, i) => (
              <Box
                key={i}
                mr={[3, 5]}
                sx={{
                  minWidth: [200, 7]
                }}
              >
                <Link href={mi['Source Link']} target='_blank'>
                  <NextImage
                    src={mi.Image[0].url}
                    alt='Market Insight'
                    // @ts-expect-error
                    width={theme.sizes[7]}
                    // @ts-expect-error
                    height={theme.sizes[7]}
                  />
                </Link>
              </Box>
            ))}
        </Flex>

        <Flex
          mt={4}
          sx={{
            display: ['flex', 'none'],
            flexDirection: 'column',
            alignItems: ['center', 'flex-start']
          }}
        >
          <Box>
            <Button variant='primary'>DOWNLOAD REPORT</Button>
          </Box>
        </Flex>
      </Flex>

      <Modal
        isOpen={isModalOpen}
        onAfterOpen={() =>
          setValue(
            'email',
            window.localStorage.getItem(EMAIL_STORAGE_KEY) || ''
          )
        }
        onRequestClose={() => setIsModalOpen(false)}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          background: 'white',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: 'lightGrey'
        }}
        style={{ overlay: { zIndex: 100 } }}
      >
        <Flex p={5} sx={{ flexDirection: 'column' }}>
          <Flex>
            <Heading variant='h1' mr={3} sx={{ flex: 2 }}>
              {download.Title}
            </Heading>
            <Text mt={2} variant='p3' sx={{ flex: 1 }}>
              {download.Content}
            </Text>
          </Flex>
          <Flex mt={3} sx={{ flexWrap: 'wrap' }}>
            {plainIndustries.map((industry, i) => (
              <Flex
                key={i}
                pr={3}
                py={2}
                onClick={getHandleSelectIndustry({
                  industry: industry.name,
                  selectedIndustries,
                  setSelectedIndustries
                })}
                sx={{
                  width: 160,
                  alignItems: 'center',
                  cursor: 'pointer',
                  opacity: selectedIndustries.includes(industry.name)
                    ? '1'
                    : '0.4',
                  '&:hover': {
                    opacity: selectedIndustries.includes(industry.name)
                      ? '1'
                      : '0.7'
                  }
                }}
              >
                <Image
                  mr={2}
                  src={industry.icon}
                  sx={{ width: 4, minWidth: 4 }}
                />
                <Text>{industry.name}</Text>
              </Flex>
            ))}
          </Flex>
          <Flex as='form' mt={3} sx={{ alignItems: 'flex-start' }}>
            <Flex sx={{ flexDirection: 'column' }}>
              <Input name='email' placeholder='Email' ref={register} />
              {errors.email && (
                <Text mt={1} sx={{ color: 'tomato' }}>
                  {errors.email}
                </Text>
              )}
              {downloadSuccess && (
                <Text mt={1}>Your PDF should begin to download now.</Text>
              )}
              {downloadSuccess === false && (
                <Text mt={1} sx={{ color: 'tomato' }}>
                  Something went wrong - if this persists, contact the GIF team.
                </Text>
              )}
            </Flex>
            <Button
              ml={2}
              variant={
                downloading || selectedIndustries.length < 1
                  ? 'disabled'
                  : 'primary'
              }
              disabled={downloading || selectedIndustries.length < 1}
              onClick={handleSubmit(data =>
                downloadPDF({
                  pdfType: 'Industry Report',
                  selected: selectedIndustries.map(si => ({
                    id: industryReports[si].id,
                    Link: industryReports[si].Link
                  })),
                  email: data.email,
                  setDownloading,
                  setDownloadSuccess
                })
              )}
              sx={{ minWidth: 160, height: 38 }}
            >
              DOWNLOAD PDF
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </FullWidthCentered>
  )
}
