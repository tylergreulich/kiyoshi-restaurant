import cookie from 'js-cookie'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

interface PrivateRouteProps {
  loggedIn: boolean
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  ...rest
}) => {
  const hasToken = cookie.get('token')

  return (
    <Route
      {...rest}
      render={({ location }) =>
        rest.loggedIn ? (
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
