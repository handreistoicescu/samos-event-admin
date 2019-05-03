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
  TextInput
} from 'react-admin';

const EventTypeList = props => (
  <List {...props} perPage={999}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <EditButton />
    </Datagrid>
  </List>
);

export const EventTypeCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export const EventTypeEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export default EventTypeList;
