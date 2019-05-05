import React from 'react';
import {
  BooleanInput,
  Create,
  Datagrid,
  DateField,
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
  <List
    {...props}
    bulkActionButtons={false}
    sort={{ field: 'date', order: 'DESC' }}
    perPage={999}
    title="Events"
  >
    <Datagrid rowClick="edit">
      <DateField
        options={{
          weekday: 'short',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }}
        source="date"
      />
      <TextField source="name" />
      <ReferenceField source="type" reference="eventTypes">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="venue" reference="venues">
        <TextField source="name" />
      </ReferenceField>
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
      <ReferenceInput source="type" reference="eventTypes">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="venue" reference="venues">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <DateInput source="date" />
      <TextInput source="link" />
      <BooleanInput source="published" />
    </SimpleForm>
  </Create>
);

const EventTitle = ({ record }) => (
  <span>{record ? `Event: "${record.name}"` : ''}</span>
);

export const EventEdit = props => (
  <Edit title={<EventTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <ReferenceInput source="type" reference="eventTypes">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="venue" reference="venues">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <DateInput source="date" />
      <TextInput source="link" />
      <BooleanInput source="published" />
    </SimpleForm>
  </Edit>
);

export default EventList;
