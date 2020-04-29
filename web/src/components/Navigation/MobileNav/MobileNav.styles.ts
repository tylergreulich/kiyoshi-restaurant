import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { MobileNavProps } from './MobileNav'

export const HamburgerIcon = styled(FontAwesomeIcon)`
  display: none;
  z-index: 103;
  position: relative;
  color: ${({ theme }) => theme.main.black};
  font-size: 1.7rem;
  cursor: pointer;

  ${({ theme }) => theme.lg`
    display: block;
  `}
`

export const CloseMenuIcon = styled(HamburgerIcon)`
  color: ${({ theme }) => theme.main.white};
`

export const NavButtonContainer = styled.div<MobileNavProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${({ theme }) => theme.lg`
    height: 100%;
  `}
`

export const NavLinksContainer = styled.div<MobileNavProps>`
  height: ${({ isMobileNav }) => (isMobileNav ? '100vh' : '100%')};
`

export const Backdrop = styled.div<MobileNavProps>`
  display: block;
  background-color: ${({ theme }) => theme.main.secondary};
  height: 100vh;
  width: 100vw;
  color: ${({ theme }) => theme.main.white};
  z-index: 100;
  top: 0;
  left: 0;
  position: absolute;
  transform: ${({ isMobileNav }) =>
    `translateY(${!isMobileNav ? '-100%' : '0%'})`};
  transition: transform 0.3s ease-in-out;
`

export const MobileLinks = styled.ul<MobileNavProps>`
  height: 100vh;
  width: 100%;
  flex-direction: column;
  color: ${({ theme }) => theme.main.white};
  justify-content: center;
  z-index: 102;
  display: ${({ isMobileNav }) => (isMobileNav ? 'flex' : 'none')};
  position: relative;
  align-items: center;
  list-style: none;

  li {
    margin: 0.5rem 0;
    a {
      text-decoration: none;
      font-size: 1.8rem;
      color: ${({ theme }) => theme.main.white};
      &:hover {
        color: ${({ theme }) => theme.main.black};
      }
    }
  }
`
