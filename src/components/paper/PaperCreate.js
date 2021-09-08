import React from 'react'
import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  ReferenceInput,
  useNotify,
  useRefresh,
  useRedirect
} from 'react-admin'

const PaperCreate = (props) => {
  const notify = useNotify()
  const refresh = useRefresh()
  const redirect = useRedirect()

  const onSuccess = () => {
    notify(`Paper Created`)
    redirect(`/paper`)
    refresh()
  }

  return (
    <Create {...props} title="Create a Paper" onSuccess={onSuccess}>
      <SimpleForm>
        <TextInput source="name" />
        <ReferenceInput source="category_id" reference="category">
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}

export default PaperCreate
