import React from 'react'
import { useSelector } from 'react-redux'
import { getFoodCategories } from '../../../store/foodCategories/foodCategories.actions'
import { RootState } from '../../../store/rootReducer'
import { MyMaterialTable } from '../utils/MyMaterialTable/MyMaterialTable'

export const FoodCategoriesTable = () => {
  const { foodCategoryItems } = useSelector(
    (state: RootState) => state.foodCategories
  )

  React.useEffect(() => {
    getFoodCategories()
  }, [foodCategoryItems])

  React.useEffect(() => {}, foodCategoryItems!)

  return foodCategoryItems ? (
    <MyMaterialTable title="All Food Categories" data={foodCategoryItems} />
  ) : null
}
