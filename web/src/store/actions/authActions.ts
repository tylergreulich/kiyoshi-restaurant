import Axios from 'axios'
import cookie from 'js-cookie'
import { history } from '../../Routes'
import { AppThunk, SET_LOGIN, SET_LOGOUT, User } from './../types'

interface LoginPayload {
  email: string
  password: string
}

interface LoginResponse {
  user: User
  access_token: string
}

export const login = (payload: LoginPayload): AppThunk => async (dispatch) => {
  const response = await Axios.post<LoginResponse>(
    '/api/auth/login',
    payload
  ).catch((error: Error) => console.error(error))

  if (response) {
    const hour = 3600000
    const days = 7

    const expires = hour * 24 * days

    cookie.set('token', response.data.access_token, {
      expires
    })

    dispatch({
      type: SET_LOGIN,
      payload: response.data.user
    })

    history.push('/admin')
  }
}

export const logout = (): AppThunk => async (dispatch) => {
  const response = await Axios.post('/api/auth/logout').catch((error) =>
    console.error(error)
  )

  if (response) {
    cookie.remove('token')

    dispatch({ type: SET_LOGOUT })

    history.push('/')
  }
}
