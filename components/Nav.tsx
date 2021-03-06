/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Image, NavLink } from 'theme-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'

const logo = require('../public/images/logo.png')

import FullWidthCentered from './FullWidthCentered'

export default function Nav () {
  const { pathname } = useRouter()

  return (
    <FullWidthCentered bg='none'>
      <Flex px={[3, 5]} py={[3, 4]} sx={{ justifyContent: 'space-between' }}>
        <Link href='/' passHref={true}>
          <NavLink pr={3} sx={{ '&:hover': { opacity: 1 } }}>
            <Flex sx={{ alignItems: 'center' }}>
              <Image src={logo} mr={3} sx={{ height: [4, 5] }} />
            </Flex>
          </NavLink>
        </Link>
        <Flex sx={{ alignItems: 'center' }}>
          <Link href='/' passHref={true}>
            <NavLink
              mr={[3, 4]}
              sx={{
                borderBottom: pathname === '/' ? 'solid white 2px' : 'none'
              }}
            >
              HOME
            </NavLink>
          </Link>
          <Link href='/about' passHref={true}>
            <NavLink
              sx={{
                borderBottom: pathname === '/about' ? 'solid white 2px' : 'none'
              }}
            >
              ABOUT
            </NavLink>
          </Link>
        </Flex>
      </Flex>
    </FullWidthCentered>
  )
}
