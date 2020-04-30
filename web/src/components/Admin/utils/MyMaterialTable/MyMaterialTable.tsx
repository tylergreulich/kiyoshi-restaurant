import MaterialTable from 'material-table'
import React from 'react'
import { tableIcons } from '../../../../utils/tableIcons'

interface Row {
  id: number
  title: string
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
      { title: 'Date Created', field: 'created_at' }
    ],
    data
  }

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
        onRowAdd: async (newData) => await console.log(newData),
        onRowUpdate: async (newData, oldData) =>
          await console.log(newData, oldData),
        onRowDelete: async (oldData) => await console.log(oldData)
      }}
    />
  )
}
