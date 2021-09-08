import React from 'react'

import { List, Datagrid, TextField } from 'react-admin'

const ReportList = (props) => {
  return (
    <List {...props} perPage={10} exporter={false}>
      <Datagrid rowClick="show">
        <TextField source="id" title="id" />
        <TextField source="paper_name" label="Paper" />
        <TextField source="category_name" label="Category" />
      </Datagrid>
    </List>
  )
}

export default ReportList
