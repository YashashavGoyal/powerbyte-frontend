import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isUserLoggedin } from '../../utils/helper';

import logoFull from '../../img/logo-full.png';

export default function Navbar(props) {
  const navigate = useNavigate();



  const path = window.location.pathname;
  // console.log(path);

  useEffect(() => {
    if (path !== '/login' || path !== '/signup' || path !== '/') {
      return;
    }
    if (!isUserLoggedin()) {
      navigate('/login');
    }
  }, []);

  if (path === '/login' || path === '/signup' || path === '/') {
    return null;
  }
  return (
    <>
      <header className='sticky top-0 z-50 flex items-center justify-between w-full px-4 py-2 bg-gray-900 shadow-md md:flex-nowrap'>
        <div className='flex items-center'>

          <span className='ml-4 text-xl font-bold text-white navbar-brand'>
            <img src={logoFull} alt="PowerByte Logo" className="w-[180px] h-auto" />
          </span>
        </div>


      </header>
    </>
  );
}
