import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from 'components/react-admin/users';
import { PostList, PostEdit, PostCreate } from 'components/react-admin/posts';

import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const RAdmin = () => (
  <Admin basename="/admin" dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
  </Admin>
);

export default RAdmin;
