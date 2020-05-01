import MaterialTable from 'material-table'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  createFoodItem,
  deleteFoodItem,
  getFoodItems,
  updateFoodItem
} from '../../../store/foodItems/foodItems.actions'
import { RootState } from '../../../store/rootReducer'
import { tableIcons } from '../../../utils/tableIcons'

export const FoodItemsTable = () => {
  const { foodItems } = useSelector((state: RootState) => state.foodItems)

  React.useEffect(() => {
    getFoodItems()
  }, [foodItems])

  const dispatch = useDispatch()

  const { columns } = {
    columns: [
      { title: 'ID', field: 'id' },
      { title: 'Title', field: 'title' },
      { title: 'Price', field: 'price' },
      { title: 'Description', field: 'description' },
      { title: 'Image Url', field: 'image_url' },
      { title: 'Date Created', field: 'created_at' }
    ]
  }

  return foodItems ? (
    <MaterialTable
      style={{
        width: '100%',
        padding: '100px'
      }}
      title="All Food Items"
      columns={columns}
      data={foodItems}
      icons={tableIcons}
      editable={{
        onRowAdd: async ({ title, description, image_url, price }) => {
          const payload = {
            title,
            description,
            image_url,
            price
          }

          dispatch(createFoodItem(payload))
        },
        onRowUpdate: async (newData) => {
          dispatch(updateFoodItem(newData))
        },
        onRowDelete: async (oldData) => {
          dispatch(deleteFoodItem(oldData.id))
        }
      }}
    />
  ) : null
}
