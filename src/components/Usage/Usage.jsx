import React from 'react';
import { Link, Outlet } from 'react-router-dom';


export default function Usage(props) {

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className='flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-gray-200'>
        <h1 className='text-3xl font-bold text-gray-900'>Energy Consumption</h1>
        <div className='flex items-center space-x-2'>
          <div className='flex shadow-sm rounded-md'>
            <button
              type='button'
              className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'
            >
              Share
            </button>
            <button
              type='button'
              className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'
            >
              Export
            </button>
          </div>
          <button
            type='button'
            className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          >
            <span data-feather='calendar' className='w-4 h-4 mr-2 text-gray-500'></span>
            This week
          </button>
        </div>
      </div>

      <div className='bg-white rounded-lg shadow-sm'>
        {/* Recent Usage Trend Header & Zone Links */}
        <div className="p-6 border-b border-gray-100">
          <h3 className='mb-4 text-xl font-bold text-gray-800'>Recent Usage Trend</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Link to="/panel/usage/zone_A" className="block p-4 text-center transition-all bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 hover:bg-blue-50 group">
              <h5 className="font-semibold text-gray-700 group-hover:text-blue-700">Zone-A</h5>
            </Link>
            <Link to="/panel/usage/zone_B" className="block p-4 text-center transition-all bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-green-300 hover:bg-green-50 group">
              <h5 className="font-semibold text-gray-700 group-hover:text-green-700">Zone-B</h5>
            </Link>
            <Link to="/panel/usage/zone_C" className="block p-4 text-center transition-all bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-purple-300 hover:bg-purple-50 group">
              <h5 className="font-semibold text-gray-700 group-hover:text-purple-700">Zone-C</h5>
            </Link>
          </div>
        </div>

        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
