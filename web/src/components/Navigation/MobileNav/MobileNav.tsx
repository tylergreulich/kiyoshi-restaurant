import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { NavigationLink } from '../NavigationLinks/NavigationLinks'
import {
  Backdrop,
  CloseMenuIcon,
  HamburgerIcon,
  MobileLinks,
  NavButtonContainer,
  NavLinksContainer
} from './MobileNav.styles'

export interface MobileNavProps {
  isMobileNav: boolean
  setIsMobileNav?: React.Dispatch<React.SetStateAction<boolean>>
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isMobileNav,
  setIsMobileNav
}) => {
  return (
    <>
      <NavButtonContainer isMobileNav={isMobileNav}>
        {isMobileNav ? (
          <CloseMenuIcon
            icon={faTimes}
            onClick={() => setIsMobileNav!(false)}
          />
        ) : (
          <HamburgerIcon icon={faBars} onClick={() => setIsMobileNav!(true)} />
        )}
      </NavButtonContainer>
      <Backdrop isMobileNav={isMobileNav}>
        <NavLinksContainer isMobileNav={isMobileNav}>
          <MobileLinks isMobileNav={isMobileNav}>
            <NavigationLink
              pathName="/"
              text="Home"
              setIsMobileNav={setIsMobileNav}
            />
            <NavigationLink
              pathName="/menu"
              text="Food"
              setIsMobileNav={setIsMobileNav}
            />
            <NavigationLink
              pathName="/about"
              text="About Us"
              setIsMobileNav={setIsMobileNav}
            />
            <NavigationLink
              pathName="/offers"
              text="Offers"
              setIsMobileNav={setIsMobileNav}
            />
          </MobileLinks>
        </NavLinksContainer>
      </Backdrop>
    </>
  )
}
