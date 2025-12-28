import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isUserLoggedin } from '../../utils/helper';

import logoFull from '../../img/logo-full.png';

export default function Navbar(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('user', false);
    navigate('/login');
  };

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
          <button
            className='p-2 text-white md:hidden focus:outline-none'
            type='button'
            aria-label='Toggle navigation'
          // Add state handling for sidebar toggle if needed, or rely on existing logic
          >
            <span className='block w-6 h-0.5 bg-white mb-1.5'></span>
            <span className='block w-6 h-0.5 bg-white mb-1.5'></span>
            <span className='block w-6 h-0.5 bg-white'></span>
          </button>
          <span className='ml-4 text-xl font-bold text-white navbar-brand'>
            <img src={logoFull} alt="PowerByte Logo" className="w-[180px] h-auto" />
          </span>
        </div>

        <div className='flex items-center'>
          <button
            className='px-4 py-2 mx-2 text-sm font-medium text-white transition-colors bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900'
            onClick={handleLogout}
          >
            Sign out
          </button>
        </div>
      </header>
    </>
  );
}
