import React from 'react';
import { Admin, Resource } from 'react-admin';
import EventIcon from '@material-ui/icons/PlaylistAdd';
import EventTypeIcon from '@material-ui/icons/Cake';
import VenueIcon from '@material-ui/icons/Place';
import dataProvider from './dataProvider';
import EventList, { EventEdit, EventCreate } from './events';
import EventTypeList, { EventTypeEdit, EventTypeCreate } from './eventTypes';
import VenueList, { VenueCreate, VenueEdit } from './venues';
import Dashboard from './Dashboard';

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource
      create={EventCreate}
      edit={EventEdit}
      icon={EventIcon}
      list={EventList}
      name="events"
      options={{ label: 'Events' }}
    />
    <Resource
      create={VenueCreate}
      edit={VenueEdit}
      icon={VenueIcon}
      list={VenueList}
      name="venues"
      options={{ label: 'Venues' }}
    />
    <Resource
      create={EventTypeCreate}
      edit={EventTypeEdit}
      icon={EventTypeIcon}
      list={EventTypeList}
      name="eventTypes"
      options={{ label: 'Event Types' }}
    />
  </Admin>
);

export default App;
