import Axios from 'axios'
import cookie from 'js-cookie'
import { AppThunk, SET_LOGIN, SET_LOGOUT, User } from './../types'

interface LoginPayload {
  email: string
  password: string
}

interface LoginResponse {
  user: User
  access_token: string
}

export const login = (payload: LoginPayload, history: any): AppThunk => async (
  dispatch
) => {
  const response = await Axios.post<LoginResponse>(
    '/api/auth/login',
    payload
  ).catch((error: Error) => console.error(error))

  if (response) {
    cookie.set('token', response.data.access_token)
    console.log(payload)

    dispatch({
      type: SET_LOGIN,
      payload: response.data.user
    })

    history.push('/admin')
  }
}

export const logout = (): AppThunk => async (dispatch, history: any) => {
  const response = await Axios.post('/api/auth/logout').catch((error) =>
    console.error(error)
  )

  if (response) {
    dispatch({ type: SET_LOGOUT })

    history.push('/')
  }
}
