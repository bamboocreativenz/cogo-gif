/** @jsx jsx */
import { jsx, Flex, Image, NavLink } from 'theme-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'

import FullWidthCentered from './FullWidthCentered'

export default function Nav () {
  const router = useRouter()

  return (
    <FullWidthCentered bg='none'>
      <Flex px={[3, 5]} py={[3, 4]} sx={{ justifyContent: 'space-between' }}>
        <Link href='/' passHref={true}>
          <NavLink pr={3}>
            <Flex sx={{ alignItems: 'center' }}>
              <Image src='/images/logo.png' mr={3} sx={{ height: [4, 5] }} />
            </Flex>
          </NavLink>
        </Link>
        <Flex sx={{ display: ['none', 'initial'], alignItems: 'center' }}>
          <Link href='/' passHref={true}>
            <NavLink mr={4} sx={{ color: 'white' }}>
              HOME
            </NavLink>
          </Link>
          <Link href='/about' passHref={true}>
            <NavLink mr={4} sx={{ color: 'white' }}>
              ABOUT
            </NavLink>
          </Link>
        </Flex>
      </Flex>
    </FullWidthCentered>
  )
}
