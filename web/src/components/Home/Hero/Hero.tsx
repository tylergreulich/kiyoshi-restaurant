import React from 'react'
import { JumboOverlay, WelcomeJumbo } from './Hero.styles'

export const Hero = () => {
  return (
    <WelcomeJumbo>
      <p>
        Welcome to <br />
        <span>Kiyoshi's Bar and Grill</span>
      </p>
      <JumboOverlay />
    </WelcomeJumbo>
  )
}
