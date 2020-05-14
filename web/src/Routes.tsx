import * as browserHistory from 'history'
import React from 'react'
import { Route, Router } from 'react-router-dom'
import styled from 'styled-components'
import GuestRoute from './components/Auth/GuestRoute/GuestRoute'
import PrivateRoute from './components/Auth/PrivateRoute/PrivateRoute'
import { Footer } from './components/Footer/Footer'
import { Navigation } from './components/Navigation/Navigation'
import ScrollIntoView from './utils/ScrollIntoView'
import { About } from './views/About/About'
import { FoodCategories } from './views/FoodCategories'
import { FoodItems } from './views/FoodItems'
import { Home } from './views/Home/Home'
import { Login } from './views/Login'
import { Menu } from './views/Menu'
import { Offers } from './views/Offers'
import { Test } from './views/test'

export const history = browserHistory.createBrowserHistory()

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
    <Router history={history}>
      <AppLayout>
        <Navigation />
        <Route path="/test" component={Test} />
        <Route path="/" exact component={Home} />
        <ContentSection>
          <Route path="/about" exact component={About} />
          <Route path="/offers" exact component={Offers} />
          <ScrollIntoView>
            <Route path="/menu" exact component={Menu} />
          </ScrollIntoView>
          <GuestRoute path="/login" exact component={Login} />
          <PrivateRoute
            path="/admin/food-categories"
            exact
            component={FoodCategories}
          />
          <PrivateRoute path="/admin/food-items" exact component={FoodItems} />
        </ContentSection>
        <Footer />
      </AppLayout>
    </Router>
  )
}
