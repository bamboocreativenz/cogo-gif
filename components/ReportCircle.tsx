/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Link as TUILink, Image } from 'theme-ui'

const RADIUS = 15.91549430918954 // N.B. 100/(2π)
const size = 34

interface ReportCircleProps {
  statisticPercent?: number
  statisticOther?: string
  text: string
  image: string
}

export default function ReportCircle ({
  statisticPercent,
  statisticOther,
  text,
  image
}: ReportCircleProps) {
  const proportion = statisticPercent
    ? `${statisticPercent} ${100 - statisticPercent}`
    : '100 0'

  return (
    <Flex
      mr={[3, 5]}
      sx={{
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 7
      }}
    >
      <svg width='100%' height='100%' viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={RADIUS} fill='#fff'></circle>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={RADIUS}
          fill='transparent'
          strokeWidth='2'
          sx={{ stroke: 'lightGrey' }}
        ></circle>

        <circle
          cx={size / 2}
          cy={size / 2}
          r={RADIUS}
          fill='transparent'
          strokeWidth='2'
          strokeDasharray={proportion}
          strokeDashoffset={25}
          sx={{ stroke: 'reportCircleBlack' }}
        ></circle>
      </svg>

      <Flex
        sx={{
          position: 'absolute',
          top: size,
          bottom: size,
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '80%'
        }}
      >
        <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
          <Heading variant='stats' mb={1}>{`${statisticPercent}%`}</Heading>
          <Text variant='p3' sx={{ textAlign: 'center' }}>
            {text}
          </Text>
        </Flex>
        <Image src={image} sx={{ maxWidth: 5 }} />
      </Flex>
    </Flex>
  )
}
