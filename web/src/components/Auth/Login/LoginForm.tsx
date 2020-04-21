import Axios from 'axios'
import cookie from 'js-cookie'
import React from 'react'

export const LoginForm = () => {
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [errors, setErrors] = React.useState<object>({})

  return (
    <div className="splash-container">
      <div className="card">
        <div className="card-header text-center">
          <a href="../index.html">
            <img
              className="logo-img"
              src="img/kiyoshi-logo.png"
              width="200"
              alt="logo"
            />
          </a>
          <span className="splash-description">
            Please enter your user information.
          </span>
        </div>
        <div className="card-body">
          <form
            onSubmit={async (event) => {
              event.preventDefault()

              const data = {
                email,
                password
              }

              const res = await Axios.post(
                '/api/auth/login',
                data
              ).catch((error) => setErrors(error.response.data))

              const me = await Axios.get('/api/auth/me').catch((error) =>
                console.error(error)
              )

              console.log(me)

              if (res) {
                cookie.set('token', res.data.access_token)
                cookie.set('user', res.data.user)
              }
            }}
          >
            <div className="form-group">
              <input
                id="email"
                type="email"
                className="form-control form-control-lg"
                name="email"
                required
                value={email}
                placeholder="Email"
                onChange={({ currentTarget }) => setEmail(currentTarget.value)}
              />
            </div>
            <div className="form-group">
              <input
                id="password"
                type="password"
                className="form-control form-control-lg"
                name="password"
                required
                value={password}
                placeholder="Password"
                onChange={({ currentTarget }) =>
                  setPassword(currentTarget.value)
                }
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
