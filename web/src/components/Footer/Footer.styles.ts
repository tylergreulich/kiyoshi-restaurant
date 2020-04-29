import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 10vh;
  align-items: center;
  background: ${({ theme }) => theme.main.primary};
  width: 100%;
  padding: 0 5%;
  color: ${({ theme }) => theme.main.white};
`

export const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: ${({ theme }) => theme.main.white};
  transition: color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.main.black};
  }

  ${({ theme }) => theme.sm`
    font-size: 1.5rem;
  `}
`

export const HoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    strong {
      margin-right: 0.25rem;
    }
  }

  ${({ theme }) => theme.md`
    span {
      font-size: 0.8rem;
    }
  `}

  ${({ theme }) => theme.sm`
    span {
      font-size: 0.6rem;
    }
  `}
`

export const AddressContainer = styled.div`
  justify-self: flex-end;

  ${({ theme }) => theme.sm`
    text-align: center;
  `}
`

export const Address = styled.div`
  text-transform: uppercase;
  font-size: 1rem;

  ${({ theme }) => theme.md`
    font-size: 0.8rem
  `}
  ${({ theme }) => theme.sm`
    span {
      font-size: 0.4rem;
    }
  `}
`
export const PhoneNumber = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.main.white};
  font-size: 0.9rem;

  ${({ theme }) => theme.md`
    font-size: 0.7rem;
  `}
  ${({ theme }) => theme.sm`
    span {
      font-size: 0.3rem;
    }
  `}
`
