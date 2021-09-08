import { Show, TextField, DateField, ArrayField, Datagrid } from 'react-admin'
import { BackButton } from '../../base/buttons/BackButton'
import { ShowTitle } from '../../base/texts/ShowTitle'
import { BoxedShowLayout, RaBox } from 'ra-compact-ui'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  detailsBox: {
    paddingRight: '50px',
    borderRight: 'solid thin',
    marginRight: '50px'
  }
}))

export const OpnameShow = (props) => {
  return (
    <Show {...props} actions={<BackButton />} title={<ShowTitle />}>
      <BoxedShowLayout>
        <RaBox display="flex">
          <RaBox
            display="flex"
            flexWrap="wrap"
            flexGrow={4}
            className={useStyles.detailsBox}
          >
            <RaBox flex="0 0 50%" display="flex" justifyContent="space-between">
              <TextField source="code" />
              <DateField source="date" label="Date" />
            </RaBox>
          </RaBox>
        </RaBox>
        <RaBox flex="0 0 100%" display="flex" mt="20px">
          <ArrayField source="items">
            <Datagrid>
              <TextField source="paper.name" label="Paper Name" />
              <TextField source="paper.code" label="Paper Code" />
              <TextField
                source="paper.category.name"
                label="Paper Category Name"
              />
              <TextField
                source="paper.category.code"
                label="Paper Category Code"
              />
              <TextField source="quantity" label="Quantity Physic" />
              <TextField source="quantity_system" label="Quantity System" />
            </Datagrid>
          </ArrayField>
        </RaBox>
      </BoxedShowLayout>
    </Show>
  )
}

export default OpnameShow
