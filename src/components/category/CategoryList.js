import React from 'react'

import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from 'react-admin'
import FilterComponent from '../../base/filter/filter'

const CategoryList = (props) => {
  return (
    <List {...props} perPage={10} filters={<FilterComponent />} exporter={false}>
      <Datagrid>
        <TextField source="id" title="id" />
        <TextField source="code" />
        <TextField source="name" />
        <EditButton basePath="/category" />
        <DeleteButton basePath="/category" />
      </Datagrid>
    </List>
  )
}

export default CategoryList
