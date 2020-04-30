import { FoodCategory } from '../../utils/interfaces/FoodCategory.interface'

export const GET_FOOD_CATEGORIES = 'GET_FOOD_CATEGORIES'

export interface GetFoodCategoriesAction {
  type: typeof GET_FOOD_CATEGORIES
  payload: FoodCategory[]
}

export type FoodCategoryTypes = GetFoodCategoriesAction
