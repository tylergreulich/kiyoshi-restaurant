import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { useLocation } from 'react-router-dom'
import {
  Address,
  AddressContainer,
  FooterWrapper,
  HoursContainer,
  PhoneNumber,
  SocialIcon
} from './Footer.styles'

export const Footer = () => {
  const location = useLocation()

  if (location.pathname === '/admin' || location.pathname === '/admin/*')
    return null

  return (
    <FooterWrapper>
      <div>
        <SocialIcon
          icon={faFacebook}
          style={{
            marginRight: '2rem'
          }}
        />
        <SocialIcon icon={faTwitter} />
      </div>
      <HoursContainer>
        <span>
          <strong>Mon - Sat:</strong> 10:30 am - 9:00 pm
        </span>
        <span>
          <strong>Sun:</strong> 11:00 am - 8:00 pm
        </span>
      </HoursContainer>
      <AddressContainer>
        <Address>
          3153 Dye Street
          <br />
          Chandler, AZ 85225
        </Address>
        <div>
          <PhoneNumber href="tel:+14807260620">1 (480) 726-0620</PhoneNumber>
        </div>
      </AddressContainer>
    </FooterWrapper>
  )
}
