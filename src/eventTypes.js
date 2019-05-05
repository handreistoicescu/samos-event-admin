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
  <List
    {...props}
    bulkActionButtons={false}
    perPage={999}
    sort={{ field: 'name', order: 'ASC' }}
    title="Event Types"
  >
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

const EventTypeTitle = ({ record }) => (
  <span>{record ? `Event: "${record.name}"` : ''}</span>
);

export const EventTypeEdit = props => (
  <Edit title={<EventTypeTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export default EventTypeList;
