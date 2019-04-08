import React from 'react';
import { Datagrid, List, TextField } from 'react-admin';

const EventList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="id" />
      <TextField source="title" />
    </Datagrid>
  </List>
);

export default EventList;
