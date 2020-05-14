import Axios from 'axios'
import { AppThunk } from '../../utils/interfaces/AppThunk.interface'
import { FoodItem } from '../../utils/interfaces/FoodItem.interface'
import {
  CREATE_FOOD_ITEM,
  DELETE_FOOD_ITEM,
  GET_FOOD_ITEMS,
  UPDATE_FOOD_ITEM
} from './foodItems.types'

export const getFoodItems = (): AppThunk => async (dispatch) => {
  const response = await Axios.get<FoodItem[]>(
    'https://kiyoshi-restaurant.xyz/api/food-items/all/'
  ).catch((error) => console.error(error))

  if (response) {
    dispatch({
      type: GET_FOOD_ITEMS,
      payload: response.data
    })
  }
}

type CreateFoodItemPayload = {
  title: string
  description: string
  image_url: string
  price: number
}

export const createFoodItem = (
  payload: CreateFoodItemPayload
): AppThunk => async (dispatch) => {
  const response = await Axios.post<FoodItem>(
    `https://kiyoshi-restaurant.xyz/api/food-items/create/`,
    payload
  ).catch((error) => console.error(error.response))

  if (response) {
    console.log('data', response)
    dispatch({
      type: CREATE_FOOD_ITEM,
      payload: response.data
    })
  }
}

export const updateFoodItem = (
  payload: CreateFoodItemPayload
): AppThunk => async (dispatch) => {
  const response = await Axios.put<FoodItem>(
    `https://kiyoshi-restaurant.xyz/api/food-items/update/`,
    payload
  ).catch((error) => console.error(error.response))

  if (response) {
    dispatch({
      type: UPDATE_FOOD_ITEM,
      payload: response.data
    })
  }
}

export const deleteFoodItem = (foodItemId: number): AppThunk => async (
  dispatch
) => {
  const response = await Axios.delete<FoodItem[]>(
    `https://kiyoshi-restaurant.xyz/api/food-items/${foodItemId}/delete/`
  ).catch((error) => console.error(error))

  if (response) {
    dispatch({
      type: DELETE_FOOD_ITEM,
      payload: foodItemId
    })
  }
}
