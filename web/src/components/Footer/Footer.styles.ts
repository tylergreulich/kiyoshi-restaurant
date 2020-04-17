import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
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
`

export const Address = styled.div`
  text-transform: uppercase;
`
export const PhoneNumber = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.main.white};
`
export const Copywrite = styled.div``
