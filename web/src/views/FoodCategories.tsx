import React from 'react'
import { useDispatch } from 'react-redux'
import { FoodCategoriesTable } from '../components/Admin/FoodCategoriesTable/FoodCategoriesTable'
import { getFoodCategories } from '../store/foodCategories/foodCategories.actions'
import { AdminContainer } from '../utils/AdminContainer'

export const FoodCategories = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getFoodCategories())
  }, [])

  return (
    <AdminContainer>
      <FoodCategoriesTable />
    </AdminContainer>
  )
}
