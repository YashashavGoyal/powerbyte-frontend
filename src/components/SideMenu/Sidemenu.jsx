import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidemenu() {
  const location = useLocation();
  const path = location.pathname;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Helper to determine active state
  const isActive = (route) => path === route || path.startsWith(route);

  return (
    <nav className='hidden w-64 min-h-screen bg-gray-900 border-r border-gray-800 md:block shrink-0'>
      <div className='sticky top-16 pt-3'>
        <ul className='flex flex-col space-y-1'>
          <li>
            <Link
              to='/panel/dashboard'
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
                  <Link to='/panel/powerconsumption/zone_A' className='block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded'>Zone-A</Link>
                  <Link to='/panel/powerconsumption/zone_B' className='block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded'>Zone-B</Link>
                  <Link to='/panel/powerconsumption/zone_C' className='block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded'>Zone-C</Link>
                  <div className="my-1 border-t border-gray-800"></div>
                  <Link to='/panel/powerconsumption/main' className='block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded'>All</Link>
                </div>
              )}
            </div>
          </li>

          <li>
            <Link
              to='/panel/energycalculator'
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
    </nav>
  );
}
