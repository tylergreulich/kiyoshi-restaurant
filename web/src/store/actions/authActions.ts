import Axios from 'axios'
import { AppThunk, SET_LOGIN, SET_LOGOUT, User } from './../types'

interface LoginPayload {
  email: string
  password: string
}

export const login = (payload: LoginPayload): AppThunk => async (dispatch) => {
  const response = await Axios.post<{ user: User }>(
    '/api/auth/login',
    payload
  ).catch((error: Error) => console.error(error))

  if (response) {
    dispatch({
      type: SET_LOGIN,
      user: response.data.user
    })
  }
}

export const logout = (): AppThunk => async (dispatch) => {
  const response = await Axios.post('/api/auth/logout').catch((error) =>
    console.error(error)
  )

  if (response) {
    dispatch({ type: SET_LOGOUT })
  }
}
