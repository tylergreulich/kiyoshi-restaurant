import React from 'react'
import IFrame from 'react-iframe'
import styled from 'styled-components'
import { PanelWrapper } from '../utils/PanelWrapper'

const StyledIFrame = styled(IFrame)`
  border: none;
`

export const ContactTextContainer = styled.div`
  width: 50%;
`

export const ContactIFrameContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`

export const Contact = () => (
  <PanelWrapper>
    <ContactTextContainer>
      <h2>Contact Us</h2>
      <div>
        <strong>Address</strong>
        <p>
          2510 E Hunt Hwy <br /> San Tan Valley, AZ 85143
        </p>
      </div>
    </ContactTextContainer>
    <ContactIFrameContainer>
      <StyledIFrame
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.92056160551!2d-111.54154378474271!3d33.137451480864705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872a48ecea7cec1d%3A0xd26c6e0aa8d93bd1!2sKiyoshi%20Teriyaki%20%26%20Sushi!5e0!3m2!1sen!2sus!4v1587934476764!5m2!1sen!2sus"
        width="600"
        height="450"
        aria-hidden="false"
      />
    </ContactIFrameContainer>
  </PanelWrapper>
)
