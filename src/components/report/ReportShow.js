import { Show, TextField, DateField, ArrayField, Datagrid } from 'react-admin'
import { BackButton } from '../../base/buttons/BackButton'
import { BoxedShowLayout, RaBox } from 'ra-compact-ui'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  detailsBox: {
    paddingRight: '50px',
    borderRight: 'solid thin',
    marginRight: '50px'
  }
}))

const ShowTitle = ({ record }) => (
  <span>Report Paper of {record ? `${record.paper_name}` : ''}</span>
)

export const ReportShow = (props) => {
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
            <RaBox
              flex="0 0 100%"
              display="flex"
              justifyContent="space-between"
            >
              <TextField source="paper_name" label="Paper Name" />
              <TextField source="paper_code" label="Paper Code" />
              <TextField source="category_name" label="Paper Category" />
              <TextField source="total_in" label="Total Quantity In" />
              <TextField source="total_out" label="Total Quantity Out" />
              <TextField source="total_quantity" label="Recent Stock" />
            </RaBox>
          </RaBox>
        </RaBox>
        <RaBox flex="0 0 100%" display="flex" mt="20px">
          <ArrayField source="details" label="Stock Opname Histories">
            <Datagrid>
              <TextField source="opname_code" label="Stock Opname Code" />
              <DateField source="opname_date" label="Date" />
              <TextField source="physic" label="Quantity Physic" />
              <TextField source="in" label="Quantity In" />
              <TextField source="out" label="Quantity Out" />
            </Datagrid>
          </ArrayField>
        </RaBox>
      </BoxedShowLayout>
    </Show>
  )
}

export default ReportShow
