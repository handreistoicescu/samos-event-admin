import React from 'react';
import {
  Create,
  Datagrid,
  DisabledInput,
  Edit,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
  UrlField
} from 'react-admin';

const VenueList = props => (
  <List
    {...props}
    bulkActionButtons={false}
    perPage={999}
    sort={{ field: 'name', order: 'ASC' }}
  >
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <UrlField source="link" />
      <EditButton />
    </Datagrid>
  </List>
);

export const VenueCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="link" />
    </SimpleForm>
  </Create>
);

export const VenueEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <TextInput source="link" />
    </SimpleForm>
  </Edit>
);

export default VenueList;
