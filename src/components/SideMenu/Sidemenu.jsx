import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Sidemenu({ isOpen, setIsOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.setItem('user', false);
    navigate('/login');
  };

  // Helper to determine active state
  const isActive = (route) => path === route || path.startsWith(route);

  // Close sidebar on mobile when a link is clicked
  const handleLinkClick = () => {
    if (window.innerWidth < 768) { // md breakpoint
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed inset-y-0 left-0 z-30 w-64 h-screen bg-gray-900 border-r border-gray-800 transition-transform duration-300 ease-in-out md:sticky md:top-0 md:translate-x-0 shrink-0 flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      {/* Scrollable Content Area */}
      <div className='flex-1 overflow-y-auto custom-scrollbar flex flex-col'>
        {/* Mobile Close Button */}
        <div className="flex justify-end p-4 md:hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            <span data-feather="x" className="w-6 h-6"></span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className='py-4 md:py-6'>
          <ul className='flex flex-col space-y-1'>
            <li>
              <Link
                to='/panel/dashboard'
                onClick={handleLinkClick}
                className={`flex items-center px-4 py-2.5 text-sm transition-colors ${isActive('/panel/dashboard') ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
              >
                <span data-feather='home' className='w-4 h-4 mr-3'></span>
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to='/panel/usage'
                onClick={handleLinkClick}
                className={`flex items-center px-4 py-2.5 text-sm transition-colors ${isActive('/panel/usage') ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
              >
                <span data-feather='file' className='w-4 h-4 mr-3'></span>
                Energy Consumption
              </Link>
            </li>
            <li>
              <Link
                to='/panel/savingmethods'
                onClick={handleLinkClick}
                className={`flex items-center px-4 py-2.5 text-sm transition-colors ${isActive('/panel/savingmethods') ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
              >
                <span data-feather='shopping-cart' className='w-4 h-4 mr-3'></span>
                Saving Methods
              </Link>
            </li>

            {/* Dropdown Section */}
            <li>
              <div className='relative'>
                <div
                  className={`flex items-center justify-between px-4 py-2.5 text-sm cursor-pointer transition-colors ${isActive('/panel/powerconsumption') ? 'text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <div className="flex items-center">
                    <span data-feather='users' className='w-4 h-4 mr-3'></span>
                    Power Consumption
                  </div>
                  <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {/* Dropdown Menu */}
                {(dropdownOpen || isActive('/panel/powerconsumption')) && (
                  <div className='py-1 bg-gray-900 border-l border-gray-800 ml-6'>
                    <Link to='/panel/powerconsumption/zone_A' onClick={handleLinkClick} className='block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded'>Zone-A</Link>
                    <Link to='/panel/powerconsumption/zone_B' onClick={handleLinkClick} className='block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded'>Zone-B</Link>
                    <Link to='/panel/powerconsumption/zone_C' onClick={handleLinkClick} className='block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded'>Zone-C</Link>
                    <div className="my-1 border-t border-gray-800"></div>
                    <Link to='/panel/powerconsumption/main' onClick={handleLinkClick} className='block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded'>All</Link>
                  </div>
                )}
              </div>
            </li>

            <li>
              <Link
                to='/panel/energycalculator'
                onClick={handleLinkClick}
                className={`flex items-center px-4 py-2.5 text-sm transition-colors ${isActive('/panel/energycalculator') ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
              >
                <span data-feather='bar-chart-2' className='w-4 h-4 mr-3'></span>
                Energy Calculator
              </Link>
            </li>
            <li>
              <Link
                to='/panel/integrations'
                onClick={handleLinkClick}
                className={`flex items-center px-4 py-2.5 text-sm transition-colors ${isActive('/panel/integrations') ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
              >
                <span data-feather='layers' className='w-4 h-4 mr-3'></span>
                Integrations
              </Link>
            </li>
          </ul>

          <h6 className='flex items-center px-4 mt-6 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider'>
            <span>Saved reports</span>
          </h6>
          <ul className='flex flex-col space-y-1'>
            <li>
              <a className='flex items-center px-4 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-colors cursor-pointer'>
                <span data-feather='file-text' className='w-4 h-4 mr-3'></span>
                Current month
              </a>
            </li>
            <li>
              <a className='flex items-center px-4 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-colors cursor-pointer' href='#'>
                <span data-feather='file-text' className='w-4 h-4 mr-3'></span>
                Last quarter
              </a>
            </li>
            <li>
              <a className='flex items-center px-4 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-colors cursor-pointer' href='#'>
                <span data-feather='file-text' className='w-4 h-4 mr-3'></span>
                Social engagement
              </a>
            </li>
            <li>
              <a className='flex items-center px-4 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-colors cursor-pointer' href='#'>
                <span data-feather='file-text' className='w-4 h-4 mr-3'></span>
                Year-end sale
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Sign Out Button (Bottom - Fixed) */}
      <div className="p-4 border-t border-gray-800 shrink-0 bg-gray-900 mt-auto">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white transition-colors bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sign out
        </button>
      </div>
    </nav>
  );
}
