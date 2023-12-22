import React from 'react';
import Sidemenu from '../SideMenu/Sidemenu';
import { Outlet } from 'react-router-dom';
import Alerts from '../Alerts/Alerts';

function Layout() {
  

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidemenu />
        <Alerts />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
