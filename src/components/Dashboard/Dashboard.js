import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Dashboard(props) {



  return (
    <>


      <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
          <h1 className='h2'>Dashboard</h1>
          <div className='btn-toolbar mb-2 mb-md-0'>
            <div className='btn-group me-2'>
              <button
                type='button'
                className='btn btn-sm btn-outline-secondary'
              >
                Share
              </button>
              <button
                type='button'
                className='btn btn-sm btn-outline-secondary'
              >
                Download Usage
              </button>
            </div>
            <button
              type='button'
              className='btn btn-sm btn-outline-secondary dropdown-toggle'
            >
              <span
                data-feather='calendar'
                className='align-text-bottom'
              ></span>
              This week
            </button>
          </div>
        </div>

        <div className='container-fluid'>
          <div className="heading">
            <h2></h2>
          </div>
          <div className="card my-4">
            <div className="card-body d-flex">
              <Link to="/panel/dashboard/zone_A" className="card border-secondary nav-link">
                <h5>Zone-A</h5>
              </Link>
              <Link to="/panel/dashboard/zone_B" className="card border-secondary nav-link">
                <h5>Zone-B</h5>
              </Link>
              <Link to="/panel/dashboard/zone_C" className="card border-secondary nav-link">
                <h5>Zone-C</h5>
              </Link>
            </div>
          </div>
          <Outlet />
        </div>

      </main>
    </>
  );
}
