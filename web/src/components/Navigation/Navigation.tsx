import React from 'react'
import { Link } from 'react-router-dom'
import LogoImage from '../../assets/img/resized-logo.png'
import { Links, Logo, NavContainer, NavWrapper } from './Navigation.styles'

export const Navigation = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <Logo to="/">
          <img src={LogoImage} alt="Logo" />
        </Logo>
        <div>
          <Links>
            <li>
              <Link to="/menu">Food</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/offers">Offers</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/menu">Order</Link>
            </li>
          </Links>
        </div>
      </NavWrapper>
    </NavContainer>
  )
}
