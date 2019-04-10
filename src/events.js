import React from 'react';
import {
  Datagrid,
  EditButton,
  List,
  ReferenceField,
  TextField,
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

export default EventList;
