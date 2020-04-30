import { combineReducers } from 'redux'
import { authReducer } from './auth/auth.reducer'
import { foodCategoriesReducer } from './foodCategories/foodCategories.reducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  foodCategories: foodCategoriesReducer
})

export type RootState = ReturnType<typeof rootReducer>
