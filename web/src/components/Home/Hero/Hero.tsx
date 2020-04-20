import React from 'react'
import { Link } from 'react-scroll'
import HeroLogo from '../../../assets/img/drawing-copy.svg'
import { Arrow, KiyoshiLogo, WelcomeJumbo } from './Hero.styles'

export const Hero = () => {
  return (
    <WelcomeJumbo>
      <KiyoshiLogo src={HeroLogo} />
      <span>Welcome to</span>
      <div>
        <strong>Kiyoshi's</strong>
      </div>
      <span>Bar and Grill</span>
      <Arrow>
        <Link to="test" smooth duration={500}>
          <span></span>
        </Link>
      </Arrow>
    </WelcomeJumbo>
  )
}
