import { DeleteButton, EditButton } from 'react-admin'

export const CustomListButtons = (props) => {
  const isDraft = props.record.status === 'draft'

  return isDraft ? (
    <>
      <EditButton basePath={props.resource} {...props} />
      <DeleteButton basePath={props.resource} {...props} />
    </>
  ) : null
}
