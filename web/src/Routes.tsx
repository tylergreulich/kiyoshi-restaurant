import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import { PrivateRoute } from './components/Auth/PrivateRoute/PrivateRoute'
import { Footer } from './components/Footer/Footer'
import { Navigation } from './components/Navigation/Navigation'
import ScrollIntoView from './utils/ScrollIntoView'
import { About } from './views/About/About'
import { Admin } from './views/Admin'
import { Home } from './views/Home/Home'
import { Login } from './views/Login'
import { Menu } from './views/Menu'

const AppLayout = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  font-family: 'Montserrat';
`

const ContentSection = styled.section`
  background: ${({ theme }) => theme.main.white};
`

export const Routes = () => {
  return (
    <Router>
      <AppLayout>
        <Navigation />
        <Route path="/" exact component={Home} />
        <ContentSection>
          <Route path="/about" exact component={About} />
          <ScrollIntoView>
            <Route path="/menu" exact component={Menu} />
          </ScrollIntoView>
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/admin" exact component={Admin} />
        </ContentSection>
        <Footer />
      </AppLayout>
    </Router>
  )
}
