import { FoodCategory } from '../../utils/interfaces/FoodCategory.interface'
import {
  CREATE_FOOD_CATEGORY,
  DELETE_FOOD_CATEGORY,
  FoodCategoryTypes,
  GET_FOOD_CATEGORIES
} from './foodCategories.types'

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

    case CREATE_FOOD_CATEGORY:
      console.log(action.payload)
      return {
        ...state,
        foodCategoryItems: [action.payload, ...state.foodCategoryItems!]
      }

    case DELETE_FOOD_CATEGORY:
      return {
        ...state,
        foodCategoryItems: state.foodCategoryItems!.filter(
          (foodCategoryItem) => foodCategoryItem.id !== action.payload
        )
      }

    default:
      return { ...state }
  }
}
