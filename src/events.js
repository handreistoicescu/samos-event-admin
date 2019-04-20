import React from 'react';
import {
  BooleanInput,
  Create,
  Datagrid,
  DateInput,
  DisabledInput,
  Edit,
  EditButton,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
  UrlField
} from 'react-admin';

const EventList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <ReferenceField source="venue" reference="venues">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="type" />
      <TextField source="date" />
      <UrlField source="link" />
      <TextField source="status" />
      <EditButton />
    </Datagrid>
  </List>
);

export const EventCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="link" />
    </SimpleForm>
  </Create>
);

export const EventEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <DateInput source="date" />
      <TextInput source="link" />
      <TextInput source="name" />
      <BooleanInput source="published" />
      <TextInput source="type" />
      <ReferenceInput source="venue" reference="venues">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export default EventList;
