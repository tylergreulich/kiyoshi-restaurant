import { FoodItem } from '../../utils/interfaces/FoodItem.interface'
import { convertMySQLDate } from './../../utils/convertMySQLDate'
import {
  CREATE_FOOD_ITEM,
  DELETE_FOOD_ITEM,
  FoodItemTypes,
  GET_FOOD_ITEMS,
  UPDATE_FOOD_ITEM
} from './foodItems.types'

type InitialFoodItemState = {
  foodItems: FoodItem[] | null
}

const initialState: InitialFoodItemState = {
  foodItems: null
}

export const foodItemsReducer = (
  state: InitialFoodItemState = initialState,
  action: FoodItemTypes
): InitialFoodItemState => {
  switch (action.type) {
    case GET_FOOD_ITEMS:
      const updatedFoodItems = action.payload.map((foodItem) => {
        const decimalPointToRoundTo = 2

        const updatedPrice = parseFloat(
          foodItem.price.toFixed(decimalPointToRoundTo)
        )

        const { convertedDate } = convertMySQLDate(
          foodItem.created_at as string
        )

        return { ...foodItem, price: updatedPrice, created_at: convertedDate }
      })

      return {
        ...state,
        foodItems: updatedFoodItems
      }

    case CREATE_FOOD_ITEM:
      return {
        ...state,
        foodItems: [action.payload, ...state.foodItems!]
      }

    case UPDATE_FOOD_ITEM:
      const {
        id: idToUpdate,
        title,
        description,
        image_url,
        price
      } = action.payload

      const newFoodItems = state.foodItems?.map((foodItem) => {
        if (foodItem.id === idToUpdate) {
          return {
            ...foodItem,
            title,
            description,
            image_url,
            price
          }
        }

        return foodItem
      })

      return {
        ...state,
        foodItems: newFoodItems as FoodItem[]
      }

    case DELETE_FOOD_ITEM:
      return {
        ...state,
        foodItems: state.foodItems!.filter(
          (foodItem) => foodItem.id !== action.payload
        )
      }

    default:
      return { ...state }
  }
}
