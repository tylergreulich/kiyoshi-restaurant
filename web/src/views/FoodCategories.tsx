import React from 'react'
import { AllFoodCategoriesTable } from '../components/Admin/FoodCategories/AllFoodCategories/AllFoodCategories'
import { AdminContainer } from '../utils/AdminContainer'
import './Admin.css'

export const FoodCategories = () => (
  <AdminContainer>
    <AllFoodCategoriesTable />
  </AdminContainer>
)
