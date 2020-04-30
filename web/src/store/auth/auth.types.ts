export const SET_LOGIN = 'SET_LOGIN'
export const SET_LOGOUT = 'SET_LOGOUT'
export const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN'

export interface User {
  fname: string
  lname: string
  email: string
}

export interface SetLoginAction {
  type: typeof SET_LOGIN
  payload: User
}

export interface SetLogoutAction {
  type: typeof SET_LOGOUT
  payload: {
    user: null
    loggedIn: boolean
  }
}

export interface SetIsLoggedInAction {
  type: typeof SET_IS_LOGGED_IN
  payload: boolean
}

export type AuthTypes = SetLoginAction | SetLogoutAction | SetIsLoggedInAction
