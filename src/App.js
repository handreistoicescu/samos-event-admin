import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
// import simpleRestProvider from 'ra-data-simple-rest';
import EventList from './events';
import VenueList, { VenueCreate, VenueEdit } from './venues';
import Dashboard from './Dashboard';

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource list={EventList} name="events" />
    <Resource
      create={VenueCreate}
      edit={VenueEdit}
      list={VenueList}
      name="venues"
    />
    {/* <Resource
      create={PostCreate}
      edit={PostEdit}
      list={PostList}
      name="posts"
    /> */}
  </Admin>
);

export default App;
