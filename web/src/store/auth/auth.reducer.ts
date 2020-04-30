import {
  AuthTypes,
  SET_IS_LOGGED_IN,
  SET_LOGIN,
  SET_LOGOUT,
  User
} from './auth.types'

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
): InitialAuthState => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        user: action.payload
      }

    case SET_LOGOUT:
      return {
        ...state,
        user: null
      }

    case SET_IS_LOGGED_IN:
      console.log(action.payload)
      return {
        ...state,
        loggedIn: action.payload
      }

    default:
      return state
  }
}
