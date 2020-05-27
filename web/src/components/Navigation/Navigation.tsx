import React from 'react'
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

  return (
    <NavContainer scrollValue={scrollPosition}>
      <NavWrapper>
        <Logo to="/">Kibou's</Logo>
        <NavigationLinks />
      </NavWrapper>
    </NavContainer>
  )
}
