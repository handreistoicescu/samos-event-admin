import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServiceProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import PostList, { PostEdit, PostCreate } from './posts';
import UserList from './users';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

const dataProvider = jsonServiceProvider('http://jsonplaceholder.typicode.com');

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      create={PostCreate}
      edit={PostEdit}
      icon={PostIcon}
      list={PostList}
      name="posts"
    />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;
