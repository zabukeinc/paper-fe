import { Filter, TextInput } from 'react-admin'

const FilterComponent = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" />
  </Filter>
)

export default FilterComponent
