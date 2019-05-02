import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
// import simpleRestProvider from 'ra-data-simple-rest';
import EventList, { EventEdit, EventCreate } from './events';
import VenueList, { VenueCreate, VenueEdit } from './venues';
import Dashboard from './Dashboard';

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource
      create={EventCreate}
      edit={EventEdit}
      list={EventList}
      name="events"
    />
    <Resource
      create={VenueCreate}
      edit={VenueEdit}
      list={VenueList}
      name="venues"
    />
  </Admin>
);

export default App;
