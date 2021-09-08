import React from 'react'

import { List, Datagrid, TextField } from 'react-admin'
import { CustomListButtons } from '../../base/buttons/ListButton'
import WarningIcon from '@material-ui/icons/Warning'
import CheckIcon from '@material-ui/icons/Check'
import FilterComponent from '../../base/filter/filter'

const TextFieldResult = (props) => {
  return props.record.result === 'not_match' ? <WarningIcon /> : <CheckIcon />
}

const OpnameList = (props) => {
  return (
    <List
      {...props}
      perPage={10}
      filters={<FilterComponent />}
      undoable={false}
      exporter={false}
    >
      <Datagrid rowClick="show">
        <TextField source="id" title="id" />
        <TextField source="code" />
        <TextField source="status" />
        <TextFieldResult source="result" />
        <CustomListButtons />
      </Datagrid>
    </List>
  )
}

export default OpnameList
