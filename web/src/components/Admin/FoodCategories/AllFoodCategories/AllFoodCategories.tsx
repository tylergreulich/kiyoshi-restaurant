import MaterialTable, { Column } from 'material-table'
import React from 'react'
import { tableIcons } from '../../../../utils/tableIcons'

interface Row {
  id: string
  title: string
  created_at: string
}

interface TableState {
  columns: Array<Column<Row>>
  data: Row[]
}

export const AllFoodCategoriesTable = () => {
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'ID', field: 'id' },
      { title: 'Title', field: 'title' },
      { title: 'Date Created', field: 'created_at' }
    ],
    data: [{ id: '1', title: 'Baran', created_at: `${new Date(Date.now())}` }]
  })

  return (
    <MaterialTable
      style={{
        width: '100%',
        padding: '100px'
      }}
      title="All Food Categories"
      columns={state.columns}
      data={state.data}
      icons={tableIcons}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve()
              setState((prevState) => {
                const data = [...prevState.data]
                data.push(newData)
                return { ...prevState, data }
              })
            }, 600)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve()
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data]
                  data[data.indexOf(oldData)] = newData
                  return { ...prevState, data }
                })
              }
            }, 600)
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve()
              setState((prevState) => {
                const data = [...prevState.data]
                data.splice(data.indexOf(oldData), 1)
                return { ...prevState, data }
              })
            }, 600)
          })
      }}
    />
  )
}
