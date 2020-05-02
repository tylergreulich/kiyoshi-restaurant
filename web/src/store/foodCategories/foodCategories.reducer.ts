import { FoodCategory } from '../../utils/interfaces/FoodCategory.interface'
import { convertMySQLDate } from './../../utils/convertMySQLDate'
import {
  CREATE_FOOD_CATEGORY,
  DELETE_FOOD_CATEGORY,
  FoodCategoryTypes,
  GET_FOOD_CATEGORIES,
  UPDATE_FOOD_CATEGORY
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
      const updatedFoodCategories = action.payload.map((foodCategory) => {
        const { convertedDate } = convertMySQLDate(
          foodCategory.created_at as string
        )

        return { ...foodCategory, created_at: convertedDate }
      })

      return {
        ...state,
        foodCategoryItems: updatedFoodCategories
      }

    case CREATE_FOOD_CATEGORY:
      return {
        ...state,
        foodCategoryItems: [action.payload, ...state.foodCategoryItems!]
      }

    case UPDATE_FOOD_CATEGORY:
      const { id: idToUpdate, title, description, image_url } = action.payload

      const newFoodCategories = state.foodCategoryItems?.map(
        (foodCategoryItem) => {
          if (foodCategoryItem.id === idToUpdate) {
            return {
              ...foodCategoryItem,
              title,
              description,
              image_url
            }
          }

          return foodCategoryItem
        }
      )

      return {
        ...state,
        foodCategoryItems: newFoodCategories as FoodCategory[]
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
