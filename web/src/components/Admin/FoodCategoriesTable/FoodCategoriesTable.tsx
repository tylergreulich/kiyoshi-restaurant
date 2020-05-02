import { Grid } from '@material-ui/core'
import MaterialTable from 'material-table'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  createFoodCategory,
  deleteFoodCategory,
  getFoodCategories,
  updateFoodCategory
} from '../../../store/foodCategories/foodCategories.actions'
import { RootState } from '../../../store/rootReducer'
import { tableIcons } from '../../../utils/tableIcons'

export const FoodCategoriesTable = () => {
  const { foodCategoryItems } = useSelector(
    (state: RootState) => state.foodCategories
  )

  React.useEffect(() => {
    getFoodCategories()
  }, [foodCategoryItems])

  const dispatch = useDispatch()

  const { columns } = {
    columns: [
      { title: 'ID', field: 'id', editable: 'never' as 'never' },
      { title: 'Title', field: 'title' },
      { title: 'Description', field: 'description' },
      { title: 'Image Url', field: 'image_url' },
      {
        title: 'Date Created',
        field: 'created_at',
        editable: 'never' as 'never'
      }
    ]
  }

  return foodCategoryItems ? (
    <Grid item>
      <MaterialTable
        style={{
          width: '100%',
          padding: '100px'
        }}
        title="All Food Categories"
        columns={columns}
        data={foodCategoryItems}
        icons={tableIcons}
        editable={{
          onRowAdd: async ({ title, description, image_url }) => {
            const payload = {
              title,
              description,
              image_url
            }

            dispatch(createFoodCategory(payload))
          },
          onRowUpdate: async (newData) => {
            dispatch(updateFoodCategory(newData))
          },
          onRowDelete: async (oldData) => {
            dispatch(deleteFoodCategory(oldData.id))
          }
        }}
      />
    </Grid>
  ) : (
    <div style={{ height: '100vh' }} />
  )
}
