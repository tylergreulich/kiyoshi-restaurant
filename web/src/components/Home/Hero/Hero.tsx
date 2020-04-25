import React from 'react'
import { Arrow, JumboOverlay, WelcomeJumbo } from './Hero.styles'

export const Hero = () => {
  return (
    <WelcomeJumbo>
      <JumboOverlay />
      <div>
        <span id="welcome">Welcome</span>
        <span id="to">To</span>
      </div>
      <div>
        <strong id="kiyoshi">Kiyoshi's</strong>
      </div>
      <div>
        <span id="teriyaki">Teriyaki</span>
        <span id="and">and</span>
        <span id="sushi">Sushi</span>
      </div>
      <Arrow id="arrow">
        <span></span>
      </Arrow>
    </WelcomeJumbo>
  )
}
