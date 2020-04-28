import React from 'react'
import { NavLink } from 'react-router-dom'
import { MobileNav } from '../MobileNav/MobileNav'
import { NavLinksContainer } from '../MobileNav/MobileNav.styles'
import { Links } from './NavigationLinks.styles'

interface NavigationLinkProps {
  pathName: string
  text: string

  setIsMobileNav?: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  pathName,
  text,
  setIsMobileNav
}) => (
  <li>
    <NavLink
      to={pathName}
      activeClassName="active"
      onClick={() => setIsMobileNav && setIsMobileNav(false)}
    >
      {text}
    </NavLink>
  </li>
)

export const NavigationLinks = () => {
  const [isMobileNav, setIsMobileNav] = React.useState(false)

  return (
    <div>
      <MobileNav isMobileNav={isMobileNav} setIsMobileNav={setIsMobileNav} />
      <NavLinksContainer isMobileNav={isMobileNav}>
        <Links isMobileNav={isMobileNav}>
          <NavigationLink pathName="/menu" text="Food" />
          <NavigationLink pathName="/about" text="About Us" />
          <NavigationLink pathName="/offers" text="Offers" />
        </Links>
      </NavLinksContainer>
    </div>
  )
}
