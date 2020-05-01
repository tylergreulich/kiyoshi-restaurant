import MaterialTable from 'material-table'
import React from 'react'
import { useDispatch } from 'react-redux'
import {
  createFoodCategory,
  deleteFoodCategory
} from '../../../../store/foodCategories/foodCategories.actions'
import { tableIcons } from '../../../../utils/tableIcons'

interface Row {
  id: number
  description: string
  title: string
  image_url: string
  created_at: string
}

interface MyMaterialTableProps {
  title: string
  data: Row[]
}

export const MyMaterialTable: React.FC<MyMaterialTableProps> = ({
  title,
  data
}) => {
  const state = {
    columns: [
      { title: 'ID', field: 'id' },
      { title: 'Title', field: 'title' },
      { title: 'Description', field: 'description' },
      { title: 'Image Url', field: 'image_url' },
      { title: 'Date Created', field: 'created_at' }
    ],
    data
  }

  const dispatch = useDispatch()

  return (
    <MaterialTable
      style={{
        width: '100%',
        padding: '100px'
      }}
      title={title}
      columns={state.columns}
      data={state.data}
      icons={tableIcons}
      editable={{
        onRowAdd: async ({ title, description, image_url }) => {
          const payload = {
            title,
            description,
            image_url
          }

          dispatch(createFoodCategory(payload))

          console.log('done')
        },
        onRowUpdate: async (newData, oldData) =>
          await console.log(newData, oldData),
        onRowDelete: async (oldData) => dispatch(deleteFoodCategory(oldData.id))
      }}
    />
  )
}
