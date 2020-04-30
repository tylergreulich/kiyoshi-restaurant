import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/rootReducer'
import { MyMaterialTable } from '../utils/MyMaterialTable/MyMaterialTable'

export const FoodCategoriesTable = () => {
  const { foodCategoryItems } = useSelector(
    (state: RootState) => state.foodCategories
  )

  return foodCategoryItems ? (
    <MyMaterialTable title="All Food Categories" data={foodCategoryItems} />
  ) : null
}
