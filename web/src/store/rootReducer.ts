import { combineReducers } from 'redux'
import { authReducer } from './auth/auth.reducer'
import { foodCategoriesReducer } from './foodCategories/foodCategories.reducer'
import { foodItemsReducer } from './foodItems/foodItems.reducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  foodCategories: foodCategoriesReducer,
  foodItems: foodItemsReducer
})

export type RootState = ReturnType<typeof rootReducer>
