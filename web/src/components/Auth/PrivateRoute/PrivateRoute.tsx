import cookie from 'js-cookie'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute: React.FC = ({ children, ...rest }) => {
  const hasToken = cookie.get('token')

  return (
    <Route
      {...rest}
      render={({ location }) =>
        hasToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
