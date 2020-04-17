import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavContainer = styled.div`
  position: fixed;
  background: white;
  height: 10vh;
  width: 100vw;
`

export const NavWrapper = styled.nav`
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  align-content: center;
`

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  img {
    height: 50%;
  }
`

export const Links = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;

  li {
    a {
      padding: 0.5rem;
      margin: 0 0.5rem;
      font-size: 1.1rem;
      color: ${({ theme }) => theme.main.black};
      font-weight: 700;
      text-decoration: none;
      display: block;
      transition: color 0.3s ease-in-out;
      &:hover {
        color: ${({ theme }) => theme.main.primary};
      }
    }
  }
`
