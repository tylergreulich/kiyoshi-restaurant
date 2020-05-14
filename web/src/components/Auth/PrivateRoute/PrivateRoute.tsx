import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { RootState } from '../../../store/rootReducer'

const PrivateRoute: React.FC<any> = ({
  component: Component,
  auth,
  ...rest
}) => {
  console.log(auth)

  return (
    <Route
      {...rest}
      render={({ location, ...props }) =>
        auth.user ? (
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

const mapStateToProps = ({ auth }: RootState) => ({
  auth
})

export default connect(mapStateToProps)(PrivateRoute)
