import React from 'react'
import {
  Edit,
  SimpleForm,
  TextInput,
  useNotify,
  useRedirect,
  useRefresh
} from 'react-admin'

const CategoryEdit = (props) => {
  const notify = useNotify()
  const refresh = useRefresh()
  const redirect = useRedirect()

  const onSuccess = () => {
    notify(`Category Updated`)
    redirect(`/category`)
    refresh()
  }

  return (
    <div>
      <Edit title="Edit a Category" {...props} onSuccess={onSuccess}>
        <SimpleForm>
          <TextInput disabled source="id" title="id" />
          <TextInput disabled source="code" />
          <TextInput source="name" />
        </SimpleForm>
      </Edit>
    </div>
  )
}

export default CategoryEdit
