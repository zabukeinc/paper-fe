import React from 'react'
import {
  AutocompleteInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput
} from 'react-admin'

const PaperEdit = (props) => {
  return (
    <div>
      <Edit title="Edit a Paper" {...props} undoable={false}>
        <SimpleForm>
          <TextInput disabled source="id" title="id" />
          <TextInput source="name" />
          <ReferenceInput
            source="category_id"
            reference="category"
            label="Category"
          >
            <AutocompleteInput optionText="name" />
          </ReferenceInput>
        </SimpleForm>
      </Edit>
    </div>
  )
}

export default PaperEdit
