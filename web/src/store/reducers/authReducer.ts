import { AuthTypes, SET_LOGIN, SET_LOGOUT, User } from '../types'

type InitialAuthState = {
  user: User | null
  loggedIn: boolean
}

const initialState: InitialAuthState = {
  user: null,
  loggedIn: false
}

export const authReducer = (
  state: InitialAuthState = initialState,
  action: AuthTypes
) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        user: action.payload,
        loggedIn: true
      }

    case SET_LOGOUT:
      return {
        ...state,
        user: null,
        loggedIn: false
      }

    default:
      return { ...state }
  }
}
