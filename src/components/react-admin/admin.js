import { Admin, Resource } from 'react-admin';
// Para php-crud-api
// import jsonServerProvider from 'ra-data-json-server';
// Para Laravel Controllers
import jsonapiClient from 'ra-jsonapi-client';
import { default as AuthProvider } from 'components/react-admin/authProvider';

import { UserList } from 'components/react-admin/users';
import { CustomerList, CustomerEdit, CustomerCreate } from 'components/react-admin/customers';

// TODO eliminar las dos líneas siguientes
import { PostList, PostEdit, PostCreate } from 'components/react-admin/posts';
import { MigrationList, MigrationEdit, MigrationCreate } from 'components/react-admin/migrations';

import CustomerIcon from '@mui/icons-material/AccountCircle';
import UserIcon from '@mui/icons-material/Group';
import PostIcon from '@mui/icons-material/Book';
import MigrationIcon from '@mui/icons-material/Storage';

const token = localStorage.getItem('auth')

const settings = {
  headers: {
    Authorization: `Bearer ${token}`,
    'X-Requested-With': 'XMLHttpRequest'
  }
}

// Para php-crud-api
// const dataProvider = jsonServerProvider('http://encuentro.test/api/records');

// Para Laravel Controllers
const dataProvider = jsonapiClient('http://encuentro.test/api', settings);

const RAdmin = () => (
  <Admin
    basename="/dashboard"
    dataProvider={dataProvider}
    authProvider={AuthProvider}
  >
    <Resource name="customers"
      list={CustomerList}
      icon={CustomerIcon}
      edit={CustomerEdit}
      create={CustomerCreate}
    />
    <Resource name="migrations"
      list={MigrationList} icon={MigrationIcon} edit={MigrationEdit} create={MigrationCreate}/>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
  </Admin>
)

export default RAdmin;
