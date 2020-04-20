import React from 'react'
import { NavLink } from 'react-router-dom'
import { Links } from '../Navigation.styles'

interface NavigationLinkProps {
  pathName: string
  text: string
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ pathName, text }) => (
  <li>
    <NavLink to={pathName} activeClassName="active">
      {text}
    </NavLink>
  </li>
)

export const NavigationLinks = () => {
  return (
    <div>
      <Links>
        <NavigationLink pathName="/menu" text="Food" />
        <NavigationLink pathName="/about" text="About Us" />
        <NavigationLink pathName="/offers" text="Offers" />
        <NavigationLink pathName="/contact" text="Contact" />
      </Links>
    </div>
  )
}
