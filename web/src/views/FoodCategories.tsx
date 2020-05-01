import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FoodCategoriesTable } from '../components/Admin/FoodCategoriesTable/FoodCategoriesTable'
import { getFoodCategories } from '../store/foodCategories/foodCategories.actions'
import { RootState } from '../store/rootReducer'
import { AdminContainer } from '../utils/AdminContainer'

export const FoodCategories = () => {
  const dispatch = useDispatch()

  const { foodCategoryItems } = useSelector(
    (state: RootState) => state.foodCategories
  )

  React.useEffect(() => {
    dispatch(getFoodCategories())
  }, [])

  return (
    <AdminContainer>
      <FoodCategoriesTable />
    </AdminContainer>
  )
}
