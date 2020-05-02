import React from 'react'
import { useDispatch } from 'react-redux'
import { FoodItemsTable } from '../components/Admin/FoodItemsTable/FoodItemsTable'
import { getFoodItems } from '../store/foodItems/foodItems.actions'
import { AdminContainer } from '../utils/AdminContainer'

export const FoodItems = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getFoodItems())
  })

  return (
    <AdminContainer>
      <FoodItemsTable />
    </AdminContainer>
  )
}
