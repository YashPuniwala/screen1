import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const menuItems = [
  { name: 'Contact & Login', path: 'contact-login' },
  { name: 'Connected accounts', path: 'connected-accounts' },
  { name: 'Teams', path: 'teams' },
  { name: 'Earnings', path: 'earnings' },
  { name: 'Availability', path: 'availability' },
  { name: 'Audience', path: 'audience' },
  { name: 'Billing', path: 'billing' },
];

const Page = () => {
  return (
    <div className='flex min-h-screen bg-gray-50'>
      {/* Sidebar */}
      <aside className='w-96 border-r border-gray-200 p-6'>
        <h2 className='mb-8 text-2xl font-semibold text-orange-500'>Settings</h2>
        <ul className='space-y-2 pl-0'>
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative flex items-center border-l-4 px-4 py-2 text-xl transition hover:bg-orange-50 ${
                    isActive
                      ? 'ml-3 border-orange-500 bg-orange-50 font-bold text-gray-600'
                      : 'border-transparent text-gray-700'
                  }`
                }
              >
                {({ isActive }) =>
                  isActive && (
                    <span className='absolute left-0 top-0 h-full w-1 rounded-r-lg bg-orange-500'></span>
                  )
                }
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className='flex-1 p-8'>
        <Outlet /> {/* This will render the selected component */}
      </main>
    </div>
  );
};

export default Page;
