import React from 'react'
import {
  Create,
  SimpleForm,
  TextInput,
  useNotify,
  useRedirect,
  useRefresh
} from 'react-admin'

const CategoryCreate = (props) => {
  const notify = useNotify()
  const refresh = useRefresh()
  const redirect = useRedirect()

  const onSuccess = () => {
    notify(`Category Created`)
    redirect(`/category`)
    refresh()
  }

  return (
    <div>
      <Create title="Create a Category" {...props} onSuccess={onSuccess}>
        <SimpleForm>
          <TextInput source="name" />
        </SimpleForm>
      </Create>
    </div>
  )
}

export default CategoryCreate
