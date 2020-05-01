import { FoodCategory } from '../../utils/interfaces/FoodCategory.interface'

export const GET_FOOD_CATEGORIES = 'GET_FOOD_CATEGORIES'
export const DELETE_FOOD_CATEGORY = 'DELETE_FOOD_CATEGORY'
export const CREATE_FOOD_CATEGORY = 'CREATE_FOOD_CATEGORY'
export const UPDATE_FOOD_CATEGORY = 'UPDATE_FOOD_CATEGORY'

export interface GetFoodCategoriesAction {
  type: typeof GET_FOOD_CATEGORIES
  payload: FoodCategory[]
}

export interface CreateFoodCategoryAction {
  type: typeof CREATE_FOOD_CATEGORY
  payload: FoodCategory
}

export interface UpdateFoodCategoryAction {
  type: typeof UPDATE_FOOD_CATEGORY
  payload: FoodCategory
}

export interface DeleteFoodCategoryAction {
  type: typeof DELETE_FOOD_CATEGORY
  payload: number
}

export type FoodCategoryTypes =
  | GetFoodCategoriesAction
  | CreateFoodCategoryAction
  | DeleteFoodCategoryAction
  | UpdateFoodCategoryAction
