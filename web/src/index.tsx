import Axios from 'axios'
import cookie from 'js-cookie'
import jwt from 'jsonwebtoken'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import './index.css'
import breakpoints from './mediaQueryBreakpoints'
import { Routes } from './Routes'
import { store } from './store/store'
import { SET_LOGIN, User } from './store/types'
import { theme } from './theme'

let token = cookie.get('token')

if (token) {
  jwt.verify(token, process.env.REACT_APP_JWT_SECRET!, (error, decoded) => {
    if (error) {
      console.log(error)
      cookie.remove('token')
      token = undefined
    } else {
      if ((decoded as any).iss !== 'http://localhost:8000/api/auth/login') {
        cookie.remove('token')
        token = undefined
      }
    }
  })
}

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={{ ...theme, ...breakpoints }}>
          <Routes />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

if (token) {
  Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

  Axios.post<User>('http://localhost:8000/api/auth/me')
    .then(({ data }) => {
      store.dispatch({ type: SET_LOGIN, payload: data as any })

      renderApp()
    })
    .catch((error) => console.error(error))
} else {
  renderApp()
}
