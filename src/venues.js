import React from 'react';
import { Datagrid, EditButton, List, TextField, UrlField } from 'react-admin';

const VenueList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <UrlField source="link" />
      <EditButton />
    </Datagrid>
  </List>
);

export default VenueList;
