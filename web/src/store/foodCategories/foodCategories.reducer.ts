import { FoodCategory } from '../../utils/interfaces/FoodCategory.interface'
import { FoodCategoryTypes, GET_FOOD_CATEGORIES } from './foodCategories.types'

type InitialFoodCategoryState = {
  foodCategoryItems: FoodCategory[] | null
}

const initialState: InitialFoodCategoryState = {
  foodCategoryItems: null
}

export const foodCategoriesReducer = (
  state: InitialFoodCategoryState = initialState,
  action: FoodCategoryTypes
): InitialFoodCategoryState => {
  switch (action.type) {
    case GET_FOOD_CATEGORIES:
      return {
        ...state,
        foodCategoryItems: action.payload
      }

    default:
      return { ...state }
  }
}
