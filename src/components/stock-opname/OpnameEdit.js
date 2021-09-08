import React from 'react'
import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  ReferenceInput,
  NumberInput,
  ArrayInput,
  SimpleFormIterator,
  TopToolbar,
  ListButton,
  DeleteButton,
  useNotify,
  useRefresh,
  useRedirect
} from 'react-admin'
import { API_URL } from '../../utils/config'
import CheckIcon from '@material-ui/icons/Check'
import { Button } from '@material-ui/core'
const axios = require('axios')

const handleCheck = (basePath, data, notify, refresh, redirect) => {
  axios
    .put(`${API_URL}${basePath}/${data.id}/check`)
    .then(() => {
      notify('Stock opname succesfully confirmed.')
      redirect('/opname')
      refresh()
    })
    .catch((err) => {
      notify(`Error when confirm stock opname: ${err.message}`, 'warning')
      redirect('/opname')
      refresh()
    })
}

const OpnameEditActions = ({ basePath, data }) => {
  const isDraft = data.status === 'draft'

  const notify = useNotify()
  const refresh = useRefresh()
  const redirect = useRedirect()

  return (
    <TopToolbar>
      {isDraft ? (
        <Button
          color="primary"
          basePath={basePath}
          record={data}
          onClick={() => handleCheck(basePath, data, notify, refresh, redirect)}
          to={basePath}
        >
          <CheckIcon />
          Confirm
        </Button>
      ) : null}
      <ListButton basePath={basePath} />
      <DeleteButton basePath={basePath} record={data} />
    </TopToolbar>
  )
}

const OpnameEdit = (props) => {
  const notify = useNotify()
  const refresh = useRefresh()
  const redirect = useRedirect()

  const onSuccess = () => {
    notify(`Stock Opname updated`)
    redirect(`/opname`)
    refresh()
  }

  const paperTextRender = (data) => `${data.category.name} - ${data.name}`

  return (
    <Edit
      {...props}
      title="Edit a Stock Opname"
      actions={<OpnameEditActions />}
      onSuccess={onSuccess}
      undoable={false}
    >
      <SimpleForm>
        <TextInput source="id" disable />
        <ArrayInput source="items" label="Stock Opname Item">
          <SimpleFormIterator>
            <ReferenceInput source="paper_id" reference="paper" label="Paper">
              <SelectInput optionText={paperTextRender} />
            </ReferenceInput>

            <NumberInput source="quantity" min={0} label="Quantity" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  )
}

export default OpnameEdit
