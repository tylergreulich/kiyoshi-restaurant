import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from './reducers/rootReducer'

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const SET_LOGIN = 'SET_LOGIN'
export const SET_LOGOUT = 'SET_LOGOUT'

export interface User {
  fname: string
  lname: string
  email: string
}

export interface SetLoginAction {
  type: typeof SET_LOGIN
  payload: {
    user: User
    loggedIn: boolean
  }
}

export interface SetLogoutAction {
  type: typeof SET_LOGOUT
  payload: {
    user: null
    loggedIn: boolean
  }
}

export type AuthTypes = SetLoginAction | SetLogoutAction
