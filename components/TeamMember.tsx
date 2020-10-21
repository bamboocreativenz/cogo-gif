/** @jsx jsx */
import { jsx, Flex, Text, Image } from 'theme-ui'

import OneThenTwoColumns from './OneThenTwoColumns'

interface TeamMemberProps {
  teamMember: any // TODO: type better
}

export default function TeamMember ({ teamMember }: TeamMemberProps) {
  return (
    <OneThenTwoColumns
      mt={[4, 5]}
      firstColumnContent={
        <Flex mb={[2, 0]} sx={{ justifyContent: 'flex-end' }}>
          <Image src={teamMember.Image[0].url} sx={{ maxHeight: 200 }} />
        </Flex>
      }
      remainingContent={
        <Flex ml={[0, 4]} sx={{ flexDirection: 'column' }}>
          <Text
            variant='p1'
            sx={{ whiteSpace: 'pre-wrap' }}
            dangerouslySetInnerHTML={{ __html: teamMember.Title }}
          />
          <Text
            variant='p1'
            sx={{ whiteSpace: 'pre-wrap' }}
            dangerouslySetInnerHTML={{ __html: teamMember.Content }}
          />
        </Flex>
      }
    />
  )
}
