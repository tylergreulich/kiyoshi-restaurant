import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../../store/actions/authActions'

export const LoginForm = () => {
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [errors, setErrors] = React.useState<object>({})

  const dispatch = useDispatch()

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

              dispatch(login(data))
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
