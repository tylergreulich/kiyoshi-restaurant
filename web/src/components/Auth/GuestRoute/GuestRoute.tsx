import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { RootState } from '../../../store/reducers/rootReducer'

const GuestRoute: React.FC<any> = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location, ...props }) =>
        auth.loggedIn ? (
          <Redirect
            to={{
              pathname: '/admin',
              state: { from: location }
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

const mapStateToProps = ({ auth }: RootState) => ({
  auth
})

export default connect(mapStateToProps)(GuestRoute)
