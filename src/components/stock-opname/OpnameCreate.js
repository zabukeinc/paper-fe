import React from 'react'
import {
  Create,
  SimpleForm,
  ReferenceInput,
  NumberInput,
  ArrayInput,
  SimpleFormIterator,
  useNotify,
  useRefresh,
  useRedirect,
  AutocompleteInput
} from 'react-admin'

const OpnameCreate = (props) => {
  const notify = useNotify()
  const refresh = useRefresh()
  const redirect = useRedirect()

  const onSuccess = () => {
    notify(`Stock Opname Ceated `)
    redirect(`/opname`)
    refresh()
  }

  const paperTextRender = (data) => `${data.category.name} - ${data.name}`

  return (
    <Create {...props} title="Create a Stock Opname" onSuccess={onSuccess}>
      <SimpleForm>
        <ArrayInput source="items" label="Stock Opname Item">
          <SimpleFormIterator>
            <ReferenceInput source="paper_id" reference="paper" label="Paper">
              <AutocompleteInput optionText={paperTextRender} />
            </ReferenceInput>

            <NumberInput source="quantity" label="quantity" min={0} />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  )
}

export default OpnameCreate
