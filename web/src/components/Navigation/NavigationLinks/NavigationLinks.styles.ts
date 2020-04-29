import styled from 'styled-components'
import { MobileNavProps } from '../MobileNav/MobileNav'

export const Links = styled.ul<MobileNavProps>`
  list-style: none;
  align-items: center;
  height: 100%;
  display: flex;

  li {
    a {
      padding: 0.5rem;
      margin: 0 0.5rem;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.main.black};
      font-weight: 700;
      text-decoration: none;
      display: block;
      transition: color 0.3s ease-in-out;
      &:hover {
        color: ${({ theme }) => theme.main.secondary};
      }
    }

    .active {
      color: ${({ theme }) => theme.main.secondary};
    }
  }

  ${({ theme }) => theme.lg`
    display: none;
  `}
`
