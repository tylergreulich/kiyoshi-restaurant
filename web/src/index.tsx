import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import './index.css'
import { Routes } from './Routes'
import { theme } from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
