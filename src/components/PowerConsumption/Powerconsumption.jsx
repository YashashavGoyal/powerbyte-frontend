import { Link, Outlet } from 'react-router-dom';

import { useGlobalData } from '../../context/data/DataState';

export default function Devices(props) {
  // console.log(kitchen);
  const { loading } = useGlobalData();

  if (loading) return (
    <div className="flex items-center justify-center h-full">
      <div className="text-xl font-semibold text-gray-500">Loading Power Data...</div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Header Section */}
      {/* Header Section */}
      <div className='flex flex-col md:flex-row md:items-center justify-between pb-4 mb-6 border-b border-gray-200 gap-4'>
        <h1 className='text-2xl md:text-3xl font-bold text-gray-900'>Device Power</h1>
        <div className='flex flex-wrap items-center gap-3'>
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

          <Link to="/panel/powerconsumption/main"
            className='inline-flex items-center px-4 py-2 text-sm font-medium text-white transition-colors bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          >
            <span data-feather='activity' className='w-4 h-4 mr-2'></span>
            Main Line Consumption
          </Link>

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
        {/* Zone Navigation */}
        <div className="p-6 border-b border-gray-100">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Link to="/panel/powerconsumption/zone_A" className="block p-4 text-center transition-all bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 hover:bg-blue-50 group">
              <h5 className="font-semibold text-gray-700 group-hover:text-blue-700">Zone-A</h5>
            </Link>
            <Link to="/panel/powerconsumption/zone_B" className="block p-4 text-center transition-all bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-green-300 hover:bg-green-50 group">
              <h5 className="font-semibold text-gray-700 group-hover:text-green-700">Zone-B</h5>
            </Link>
            <Link to="/panel/powerconsumption/zone_C" className="block p-4 text-center transition-all bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-purple-300 hover:bg-purple-50 group">
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
