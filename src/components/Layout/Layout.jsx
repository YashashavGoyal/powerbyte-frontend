import React from 'react';
import Sidemenu from '../SideMenu/Sidemenu';
import { Outlet } from 'react-router-dom';
import Alerts from '../Alerts/Alerts';
import { useGlobalData } from '../../context/data/DataState';

function Layout() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const { alertsEnabled, toggleAlerts, alertCount } = useGlobalData();

  return (
    <div className='flex min-h-screen bg-gray-50'>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-gray-900 bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <Sidemenu isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className='flex flex-col flex-1 min-w-0 transition-all duration-300 ease-in-out'>
        {/* Mobile Header */}
        <header className="flex flex-col items-center px-4 py-3 bg-white border-b border-gray-200 md:hidden sm:px-6 lg:px-8">
          <div className="flex justify-between w-full">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <span className="ml-4 text-lg font-bold text-gray-900">PowerByte Panel</span>
          </div>
          <div className="flex justify-center w-full">
            <button
              onClick={toggleAlerts}
              className="relative flex items-center p-2 text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none transition-colors"
            >
              {alertsEnabled ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              )}
              <span className="ml-2 text-sm font-medium sm:inline">
                {alertsEnabled ? "Mute Alerts" : "Enable Alerts"}
              </span>

              {!alertsEnabled && alertCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                  {alertCount}
                </span>
              )}
            </button>
          </div>
        </header>

        {/* Desktop Header */}
        <header className="hidden md:flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            PowerByte Panel
          </h2>
          <div className="flex items-center">
            <button
              onClick={toggleAlerts}
              className="relative flex items-center p-2 text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none transition-colors"
              title={alertsEnabled ? "Mute Alerts" : "Enable Alerts"}
            >
              {alertsEnabled ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              )}
              <span className="ml-2 text-sm font-medium">
                {alertsEnabled ? "Mute Alerts" : "Enable Alerts"}
              </span>

              {!alertsEnabled && alertCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                  {alertCount}
                </span>
              )}
            </button>
          </div>
        </header>

        <main className='flex-1 p-4 overflow-y-auto md:p-6'>
          <Alerts />
          <Outlet />
        </main>
      </div>
    </div >
  );
}

export default Layout;
