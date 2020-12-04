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
import { Dispatch, SetStateAction, useState, useRef } from 'react'
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
  selectedIndustriesForDownload,
  setSelectedIndustriesForDownload,
  industry
}) {
  return function handleSelectIndustry () {
    if (selectedIndustriesForDownload.includes(industry)) {
      setSelectedIndustriesForDownload(
        without(selectedIndustriesForDownload, industry)
      )
    } else {
      setSelectedIndustriesForDownload(
        selectedIndustriesForDownload.concat(industry)
      )
    }
  }
}

interface IndustryReportsProps {
  copy: any // TODO: type better
  download: any // TODO: type better
  marketInsights: any // TODO: type better
  industryReports: any // TODO: type better
  selectedIndustries: Array<string>
  selectedTheme: string
}

export default function IndustryReports ({
  copy,
  download,
  marketInsights,
  industryReports,
  selectedIndustries,
  selectedTheme
}: IndustryReportsProps) {
  const { theme } = useThemeUI()
  const scrollContainer = useRef(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [
    selectedIndustriesForDownload,
    setSelectedIndustriesForDownload
  ] = useState([])
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

  const filteredMarketInsights = marketInsights.filter(mi =>
    selectedTheme && selectedIndustries.length > 0
      ? mi.Themes &&
        mi.Themes.includes(selectedTheme) &&
        mi.Industries &&
        selectedIndustries.some(mi.Industries.includes)
      : selectedTheme
      ? mi.Themes && mi.Themes.includes(selectedTheme)
      : selectedIndustries.length > 0
      ? mi.Industries && selectedIndustries.some(mi.Industries.includes)
      : mi
  )

  const handleScrollContainer = (direction: string) => () => {
    // N.B. this isn't a perfect calculation, but it's close
    const insightWidth =
      scrollContainer.current.scrollWidth / filteredMarketInsights.length +
      filteredMarketInsights.length

    scrollContainer.current.scroll({
      left:
        direction === 'left'
          ? scrollContainer.current.scrollLeft + insightWidth
          : scrollContainer.current.scrollLeft - insightWidth,
      behavior: 'smooth'
    })
  }

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

        <Flex sx={{ position: 'relative' }}>
          {filteredMarketInsights.length > 0 && (
            <Button
              onClick={handleScrollContainer('right')}
              variant='tertiary'
              bg='initial'
              sx={{
                position: 'absolute',
                left: 0,
                top: [100, 128],
                zIndex: 100
              }}
            >
              <Image src='/icons/chevron-left.svg' sx={{ height: 5 }} />
            </Button>
          )}
          <Flex ref={scrollContainer} py={4} sx={{ overflowX: 'scroll' }}>
            {filteredMarketInsights.map(mi => (
              <Box
                key={mi.id}
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
          {filteredMarketInsights.length > 0 && (
            <Button
              onClick={handleScrollContainer('left')}
              variant='tertiary'
              bg='initial'
              sx={{
                position: 'absolute',
                right: 0,
                top: [100, 128],
                zIndex: 100
              }}
            >
              <Image src='/icons/chevron-right.svg' sx={{ height: 5 }} />
            </Button>
          )}
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
            {plainIndustries
              .filter(pi => Object.keys(industryReports).includes(pi.name))
              .map((industry, i) => (
                <Flex
                  key={i}
                  pr={3}
                  py={2}
                  onClick={getHandleSelectIndustry({
                    industry: industry.name,
                    selectedIndustriesForDownload,
                    setSelectedIndustriesForDownload
                  })}
                  sx={{
                    width: 160,
                    alignItems: 'center',
                    cursor: 'pointer',
                    opacity: selectedIndustriesForDownload.includes(
                      industry.name
                    )
                      ? '1'
                      : '0.4',
                    '&:hover': {
                      opacity: selectedIndustriesForDownload.includes(
                        industry.name
                      )
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
          {plainIndustries.filter(
            pi => !Object.keys(industryReports).includes(pi.name)
          ).length > 0 && (
            <>
              <Heading mt={4} variant='h3'>
                Coming soon:
              </Heading>
              <Flex mt={3} sx={{ flexWrap: 'wrap' }}>
                {plainIndustries
                  .filter(pi => !Object.keys(industryReports).includes(pi.name))
                  .map((industry, i) => (
                    <Flex
                      key={i}
                      pr={3}
                      py={2}
                      sx={{
                        width: 160,
                        alignItems: 'center',
                        opacity: 0.4
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
            </>
          )}
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
                downloading || selectedIndustriesForDownload.length < 1
                  ? 'disabled'
                  : 'primary'
              }
              disabled={downloading || selectedIndustriesForDownload.length < 1}
              onClick={handleSubmit(data =>
                downloadPDF({
                  pdfType: 'Industry Report',
                  selected: selectedIndustriesForDownload.map(si => ({
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
