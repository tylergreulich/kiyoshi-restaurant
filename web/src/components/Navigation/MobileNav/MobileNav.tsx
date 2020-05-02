import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import { logout } from '../../../store/auth/auth.actions'
import { isAdminRoute } from '../../../utils/isAdminRoute'
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
  isMobileNav?: boolean
  setIsMobileNav?: React.Dispatch<React.SetStateAction<boolean>>
  isAdminRoute?: boolean
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isMobileNav,
  setIsMobileNav
}) => {
  const location = useLocation()

  const dispatch = useDispatch()

  const isAdminRouteValue = isAdminRoute(location)

  return (
    <>
      <NavButtonContainer
        isMobileNav={isMobileNav}
        isAdminRoute={isAdminRouteValue}
      >
        {isMobileNav ? (
          <CloseMenuIcon
            icon={faTimes}
            onClick={() => setIsMobileNav!(false)}
            isAdminRoute={isAdminRouteValue}
          />
        ) : (
          <HamburgerIcon
            icon={faBars}
            onClick={() => setIsMobileNav!(true)}
            isAdminRoute={isAdminRouteValue}
          />
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
            {isAdminRouteValue && (
              <>
                <NavigationLink
                  pathName="/admin/food-categories"
                  text="Edit Food Categories"
                  setIsMobileNav={setIsMobileNav}
                />
                <NavigationLink
                  pathName="/admin/food-items"
                  text="Edit Food Items"
                  setIsMobileNav={setIsMobileNav}
                />
                <li>
                  <NavLink
                    to="/logout"
                    activeClassName="active"
                    onClick={() => {
                      dispatch(logout())
                      setIsMobileNav!(false)
                    }}
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            )}
          </MobileLinks>
        </NavLinksContainer>
      </Backdrop>
    </>
  )
}
