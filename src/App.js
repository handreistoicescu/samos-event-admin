import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import EventList from './events';
import VenueList from './venues';
import Dashboard from './Dashboard';

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource list={EventList} name="events" />
    <Resource list={VenueList} name="venues" />
    {/* <Resource
      create={PostCreate}
      edit={PostEdit}
      list={PostList}
      name="posts"
    /> */}
  </Admin>
);

export default App;
