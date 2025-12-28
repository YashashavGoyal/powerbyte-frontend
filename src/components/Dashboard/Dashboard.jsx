import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Dashboard(props) {



  return (
    <>


      <div className='w-full'>
        <div className='flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-gray-200'>
          <h1 className='text-3xl font-bold text-gray-900'>Dashboard</h1>
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
                Download Usage
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
          {/* Zone Cards */}
          <div className="p-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Link to="/panel/dashboard/zone_A" className="block p-6 transition-shadow bg-blue-50 border border-blue-100 rounded-lg hover:shadow-md hover:border-blue-200 group">
                <h5 className="text-lg font-semibold text-blue-700 group-hover:text-blue-800">Zone-A</h5>
              </Link>
              <Link to="/panel/dashboard/zone_B" className="block p-6 transition-shadow bg-green-50 border border-green-100 rounded-lg hover:shadow-md hover:border-green-200 group">
                <h5 className="text-lg font-semibold text-green-700 group-hover:text-green-800">Zone-B</h5>
              </Link>
              <Link to="/panel/dashboard/zone_C" className="block p-6 transition-shadow bg-purple-50 border border-purple-100 rounded-lg hover:shadow-md hover:border-purple-200 group">
                <h5 className="text-lg font-semibold text-purple-700 group-hover:text-purple-800">Zone-C</h5>
              </Link>
            </div>
          </div>

          <div className="p-6 pt-0">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
