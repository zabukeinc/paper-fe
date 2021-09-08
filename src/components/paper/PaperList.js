import React from 'react'

import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from 'react-admin'
import FilterComponent from '../../base/filter/filter'

const PaperList = (props) => {
  return (
    <List
      {...props}
      perPage={10}
      filters={<FilterComponent />}
      exporter={false}
      undoable={false}
    >
      <Datagrid>
        <TextField source="id" title="id" />
        <TextField source="code" />
        <TextField source="name" />
        <TextField source="category.name" label="Category" />
        <EditButton basePath="/paper" />
        <DeleteButton basePath="/paper" />
      </Datagrid>
    </List>
  )
}

export default PaperList
