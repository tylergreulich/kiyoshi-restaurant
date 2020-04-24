import React from 'react'
import { Link } from 'react-scroll'
import { Arrow, JumboOverlay, WelcomeJumbo } from './Hero.styles'

export const Hero = () => {
  return (
    <WelcomeJumbo>
      <JumboOverlay />
      <span id="welcome">Welcome to</span>
      <div>
        <strong>Kiyoshi's</strong>
      </div>
      <span id="teriyaki-and-sushi">Teriyaki and Sushi</span>
      <Arrow>
        <Link to="test" smooth duration={500}>
          <span></span>
        </Link>
      </Arrow>
    </WelcomeJumbo>
  )
}
