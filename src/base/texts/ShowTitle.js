export const ShowTitle = ({ record }) => {
  return <span>{record ? `${record.code}` : ''}</span>
}
