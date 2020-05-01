import { FoodItem } from '../../utils/interfaces/FoodItem.interface'

export const GET_FOOD_ITEMS = 'GET_FOOD_ITEMS'
export const DELETE_FOOD_ITEM = 'DELETE_FOOD_CATEGORY'
export const CREATE_FOOD_ITEM = 'CREATE_FOOD_CATEGORY'
export const UPDATE_FOOD_ITEM = 'UPDATE_FOOD_CATEGORY'

export interface GetFoodItemsAction {
  type: typeof GET_FOOD_ITEMS
  payload: FoodItem[]
}

export interface CreateFoodItemAction {
  type: typeof CREATE_FOOD_ITEM
  payload: FoodItem
}

export interface UpdateFoodItemAction {
  type: typeof UPDATE_FOOD_ITEM
  payload: FoodItem
}

export interface DeleteFoodItemAction {
  type: typeof DELETE_FOOD_ITEM
  payload: number
}

export type FoodItemTypes =
  | GetFoodItemsAction
  | CreateFoodItemAction
  | DeleteFoodItemAction
  | UpdateFoodItemAction
