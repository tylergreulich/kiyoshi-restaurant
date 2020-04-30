import Axios from 'axios'
import { AppThunk } from '../../utils/interfaces/AppThunk.interface'
import { FoodCategory } from '../../utils/interfaces/FoodCategory.interface'
import { GET_FOOD_CATEGORIES } from './foodCategories.types'

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
