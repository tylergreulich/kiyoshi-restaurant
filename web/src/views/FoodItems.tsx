import React from 'react'
import { FoodItemsTable } from '../components/Admin/FoodItemsTable/FoodItemsTable'
import { AdminContainer } from '../utils/AdminContainer'

export const FoodItems = () => (
  <AdminContainer>
    <FoodItemsTable />
  </AdminContainer>
)
