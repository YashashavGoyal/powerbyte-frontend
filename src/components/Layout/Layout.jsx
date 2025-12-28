import React from 'react';
import Sidemenu from '../SideMenu/SideMenu';
import { Outlet } from 'react-router-dom';
import Alerts from '../Alerts/Alerts';

function Layout() {
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <Sidemenu />
      <main className='flex-1 p-6 overflow-y-auto transition-all duration-300 ease-in-out'>
        <Alerts />
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
