import { Link, usePage } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import FilterBar from '@/Components/FilterBar/FilterBar';
import Pagination from '@/Components/Pagination/Pagination';
import { PaginatedData, User } from '@/types';
import Table from '@/Components/Table/Table';
import { Trash2 } from 'lucide-react';

const Index = () => {
  const { users } = usePage<{ users: PaginatedData<User> }>().props;

  console.log(users);
  const {
    data,
    meta: { links }
  } = users;

  return (
    <div>
      <div className="flex justify-between mb-8">

        <h1 className="text-3xl font-bold">Users</h1>
        <Link
          className="btn-indigo focus:outline-none"
          href={route('users.create')}
        >
          <span>Create</span>
          <span className="hidden md:inline"> User</span>
        </Link>
      </div>
      <div className="flex items-center justify-between mb-6">
        {/*<FilterBar />*/}
        <div className="grid gap-4 mb-6 md:grid-cols-4" >
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
              name</label>
            <input type="text" id="first_name"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="John" required/>
          </div>
          <div>
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
              an option</label>
            <select id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
              name</label>
            <input type="text" id="first_name"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="John" required/>
          </div>
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
              name</label>
            <input type="text" id="first_name"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="John" required/>
          </div>
        </div>
        <Link
          className="btn-indigo focus:outline-none"
          // href={route('users.create')}
        >
          <span>Tìm kiếm</span>
        </Link>
      </div>
      <Table
        columns={[
          {
            label: 'Name',
            name: 'name',
            renderCell: row => (
              <>
                {row.photo && (
                  <img
                    src={row.photo}
                    alt={row.name}
                    className="w-5 h-5 mr-2 rounded-full"
                  />
                )}
                <>{row.name}</>
                {row.deleted_at && (
                  <Trash2 size={16} className="ml-2 text-gray-400" />
                )}
              </>
            )
          },
          { label: 'Email', name: 'email' },
          {
            label: 'Role',
            name: 'owner',
            colSpan: 1,
            renderCell: row => (row.owner ? 'Owner' : 'User')
          },
          {
            label: 'Action',
            name: 'action',
            colSpan: 1,
            renderCell: row => (
              <>
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-2">Show</a>
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-2">Edit</a>
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
              </>
              )
          }
        ]}
        rows={data}
        getRowDetailsUrl={row => route('users.edit', row.id)}
      />
      <Pagination links={links} />
    </div>
  );
};

/**
 * Persistent Layout (Inertia.js)
 *
 * [Learn more](https://inertiajs.com/pages#persistent-layouts)
 */
Index.layout = (page: React.ReactNode) => (
  <MainLayout title="Users" children={page} />
);

export default Index;
