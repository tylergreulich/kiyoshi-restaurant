import { FoodItem } from '../../utils/interfaces/FoodItem.interface'
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
      const updatedFoodItemPrices = action.payload.map((foodItem) => {
        const decimalPointToRoundTo = 2

        const updatedPrice = parseFloat(
          foodItem.price.toFixed(decimalPointToRoundTo)
        )

        return { ...foodItem, price: updatedPrice }
      })

      return {
        ...state,
        foodItems: updatedFoodItemPrices
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
          console.log('updating')
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
