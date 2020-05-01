import React from 'react'
import { useLocation } from 'react-router-dom'
import LogoImage from '../../assets/img/resized-logo.png'
import { Logo, NavContainer, NavWrapper } from './Navigation.styles'
import { NavigationLinks } from './NavigationLinks/NavigationLinks'

export const Navigation = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollPosition])

  const location = useLocation()

  const isAdminRoute =
    location.pathname === '/admin/food-categories' ||
    location.pathname === '/admin/food-items'

  return isAdminRoute ? null : (
    <NavContainer scrollValue={scrollPosition}>
      <NavWrapper>
        <Logo to="/">
          <img src={LogoImage} alt="Logo" />
        </Logo>
        <NavigationLinks />
      </NavWrapper>
    </NavContainer>
  )
}
