import React from 'react'
import { useStore } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const state = useStore().getState()

  return (
    <Route
      {...rest}
      render={({ location, ...props }) =>
        state.auth.loggedIn ? (
          <Component {...props} />
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
