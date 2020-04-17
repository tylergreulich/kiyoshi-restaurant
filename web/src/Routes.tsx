import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Footer } from './components/Footer/Footer'
import { Navigation } from './components/Navigation/Navigation'
import { About } from './views/About/About'
import { Home } from './views/Home'

const AppLayout = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  font-family: 'Montserrat';
`

const ContentSection = styled.section`
  background: ${({ theme }) => theme.main.primary};
`

export const Routes = () => (
  <Router>
    <AppLayout>
      <Navigation />
      <Route path="/" exact component={Home} />
      <ContentSection>
        <Route path="/about" exact component={About} />
      </ContentSection>
      <Footer />
    </AppLayout>
  </Router>
)
