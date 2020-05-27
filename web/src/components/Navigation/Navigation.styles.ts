import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface NavContainerProps {
  scrollValue: number
}

export const NavContainer = styled.div<NavContainerProps>`
  position: fixed;
  z-index: 11;
  background: white;
  height: 10vh;
  width: 100vw;
  transition: opacity 0.2s ease-in-out;
`

export const NavWrapper = styled.nav`
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  align-content: center;

  > div {
    ${({ theme }) => theme.lg`
      width: 100%;
    `}
  }
`

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  width: 4%;
  text-decoration: none;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 500;
  color: ${({ theme }) => theme.main.primary};
`
