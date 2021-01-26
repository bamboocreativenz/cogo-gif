/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Text, Image } from 'theme-ui'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import NextImage from 'next/image'

import OneThenTwoColumns from './OneThenTwoColumns'

interface TeamMemberProps {
  copy: any // TODO: type better
}

export default function TeamMember ({ copy }: TeamMemberProps) {
  return (
    <OneThenTwoColumns
      mt={[4, 5]}
      firstColumnContent={
        <Flex mb={[2, 0]}>
          <NextImage
            src={copy.Image[0].url}
            alt={copy.Title}
            width={200}
            height={200}
          />
        </Flex>
      }
      remainingContent={
        <Flex ml={[0, 4]} sx={{ flexDirection: 'column' }}>
          <ReactMarkdown
            renderers={{
              paragraph: props => (
                <Text
                  variant='p1'
                  mb={2}
                  sx={{ whiteSpace: 'pre-wrap' }}
                  {...props}
                />
              )
            }}
            plugins={[gfm]}
            children={copy.Title}
          />
          <ReactMarkdown
            renderers={{
              paragraph: props => (
                <Text
                  variant='quote'
                  sx={{ whiteSpace: 'pre-wrap' }}
                  {...props}
                />
              )
            }}
            plugins={[gfm]}
            children={copy.Content}
          />
        </Flex>
      }
    />
  )
}
