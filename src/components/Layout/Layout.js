import React, { useEffect } from 'react';
import Sidemenu from '../SideMenu/Sidemenu';
import { Outlet } from 'react-router-dom';

function Layout() {
  

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidemenu />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
