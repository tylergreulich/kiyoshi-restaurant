import Axios from 'axios'
import cookie from 'js-cookie'
import { history } from '../../Routes'
import { AppThunk } from '../../utils/interfaces/AppThunk.interface'
import { SET_IS_LOGGED_IN, SET_LOGIN, SET_LOGOUT, User } from './auth.types'

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
    'http://kiyoshi-restaurant.xyz/api/auth/login',
    payload
  ).catch((error: Error) => console.error(error))

  if (response) {
    const hour = 3600000
    const days = 7

    const expires = hour * 24 * days * 168

    cookie.set('token', response.data.access_token, {
      expires
    })

    dispatch({
      type: SET_LOGIN,
      payload: response.data.user
    })

    dispatch({ type: SET_IS_LOGGED_IN, payload: true })

    history.push('/admin/food-categories')
  }
}

export const logout = (): AppThunk => async (dispatch) => {
  const response = await Axios.post(
    'http://kiyoshi-restaurant.xyz/api/auth/logout'
  ).catch((error) => console.error(error))

  if (response) {
    cookie.remove('token')

    dispatch({ type: SET_LOGOUT })

    dispatch({ type: SET_IS_LOGGED_IN, payload: false })

    history.push('/')
  }
}
