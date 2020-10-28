/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Image, Button, Input } from 'theme-ui'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Modal from 'react-modal'

import { EmailZ } from '../types/util'

import FullWidthCentered from './FullWidthCentered'
import OneThenTwoColumns from './OneThenTwoColumns'
import ThemePill from './ThemePill'

import downloadPDF from '../util/downloadPDF'

interface CaseStudiesProps {
  caseStudies: any // TODO: type better
  copy: any // TODO: type better
  download: any // TODO: type better
  selectedIndustry: string
  selectedTheme: string
}

export default function CaseStudies ({
  caseStudies,
  copy,
  download,
  selectedIndustry,
  selectedTheme
}: CaseStudiesProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalCaseStudy, setModalCaseStudy] = useState(null)
  const [downloading, setDownloading] = useState(false)
  const [downloadSuccess, setDownloadSuccess] = useState(null)
  const { register, handleSubmit, errors } = useForm({
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
      <Flex px={[3, 5]} mb={5} mt={3} sx={{ flexDirection: 'column' }}>
        <OneThenTwoColumns
          mb={4}
          firstColumnContent={<Heading variant='h1'>{copy.Title}</Heading>}
          remainingContent={
            <Flex ml={[0, 4]} sx={{ flexDirection: 'column' }}>
              <Text variant='p3'>{copy.Content}</Text>
            </Flex>
          }
        />

        <Flex py={3} px={1} sx={{ overflowX: 'scroll' }}>
          {caseStudies
            .filter(cs =>
              selectedTheme && selectedIndustry
                ? cs.Theme === selectedTheme && cs.Industry === selectedIndustry
                : selectedTheme
                ? cs.Theme === selectedTheme
                : selectedIndustry
                ? cs.Industry === selectedIndustry
                : cs
            )
            .map((cs, i) => {
              const banner =
                (cs['Banner'] && cs['Banner'][0].url) ||
                '/images/case-study-banner-mevo.png'
              const logo =
                (cs['Logo'] && cs['Logo'][0].url) ||
                '/images/case-study-logo-mevo.png'
              const bio = cs['Bio'] || 'insert bio here'
              const cta = cs['Call To Action Text'] || 'DOWNLOAD FULL'
              const industry = cs['Industry'] || 'industry'
              const theme = cs['Theme'] || 'theme'

              return (
                <Flex
                  key={i}
                  mr={4}
                  bg='white'
                  sx={{
                    flexDirection: 'column',
                    minWidth: [300, 500],
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
                      {cs['Heading']}
                    </Heading>
                    <Image src={banner} />
                  </Flex>

                  <Flex
                    p={3}
                    sx={{
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%'
                    }}
                  >
                    <Flex sx={{ justifyContent: 'space-between' }}>
                      <Text variant='p3'>{bio}</Text>
                      <Image
                        src={logo}
                        ml={3}
                        sx={{ display: ['none', 'initial'], maxWidth: 6 }}
                      />
                    </Flex>
                    <Flex
                      sx={{
                        flexDirection: ['column', 'row'],
                        justifyContent: 'space-between',
                        alignItems: 'flex-start'
                      }}
                    >
                      <Button
                        variant='tertiary'
                        onClick={() => {
                          setModalCaseStudy(cs)
                          setIsModalOpen(true)
                        }}
                      >
                        {cta}
                      </Button>
                      <Flex sx={{ alignItems: 'center' }}>
                        <Box mr={3}>
                          <ThemePill theme={theme} size='small' />
                        </Box>
                        <Box>{industry}</Box>
                        <Image
                          src={logo}
                          ml={3}
                          sx={{ display: ['initial', 'none'], maxWidth: 5 }}
                        />
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              )
            })}
        </Flex>
      </Flex>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsModalOpen(false)
          setModalCaseStudy(null)
        }}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          background: 'white',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: 'lightGrey;'
        }}
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
              variant={downloading ? 'disabled' : 'primary'}
              disabled={downloading}
              onClick={handleSubmit(data =>
                downloadPDF({
                  pdfType: 'Case Study',
                  selected: [modalCaseStudy],
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
