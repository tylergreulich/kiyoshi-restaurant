import Axios from 'axios'
import { AppThunk } from '../../utils/interfaces/AppThunk.interface'
import { FoodCategory } from '../../utils/interfaces/FoodCategory.interface'
import {
  CREATE_FOOD_CATEGORY,
  DELETE_FOOD_CATEGORY,
  GET_FOOD_CATEGORIES,
  UPDATE_FOOD_CATEGORY
} from './foodCategories.types'

export const getFoodCategories = (): AppThunk => async (dispatch) => {
  const response = await Axios.get<FoodCategory[]>(
    '/api/food-categories/all'
  ).catch((error) => console.error(error))

  if (response) {
    dispatch({
      type: GET_FOOD_CATEGORIES,
      payload: response.data
    })
  }
}

type CreateFoodCategoryPayload = {
  title: string
  description: string
  image_url: string
}

export const createFoodCategory = (
  payload: CreateFoodCategoryPayload
): AppThunk => async (dispatch) => {
  const response = await Axios.post<FoodCategory>(
    `/api/food-categories/create/`,
    payload
  ).catch((error) => console.error(error.response))

  if (response) {
    console.log('data', response)
    dispatch({
      type: CREATE_FOOD_CATEGORY,
      payload: response.data
    })
  }
}

export const updateFoodCategory = (
  payload: CreateFoodCategoryPayload
): AppThunk => async (dispatch) => {
  const response = await Axios.put<FoodCategory>(
    `/api/food-categories/update/`,
    payload
  ).catch((error) => console.error(error.response))

  if (response) {
    dispatch({
      type: UPDATE_FOOD_CATEGORY,
      payload: response.data
    })
  }
}

export const deleteFoodCategory = (foodCategoryId: number): AppThunk => async (
  dispatch
) => {
  const response = await Axios.delete<FoodCategory[]>(
    `/api/food-categories/${foodCategoryId}/delete`
  ).catch((error) => console.error(error))

  if (response) {
    dispatch({
      type: DELETE_FOOD_CATEGORY,
      payload: foodCategoryId
    })
  }
}
