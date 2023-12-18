import React from 'react'
import { Link } from 'react-router-dom';

export default function Sidemenu() {

  const path = window.location.pathname;
  // console.log(path);

  if (path === '/login' || path === '/signup' || path === '/') {
    return null;
  }
  return (
    // (path != '/login' || path != '/signup' || path != '/') && 
    <>
      <nav
        id='sidebarMenu'
        className='col-md-3 col-lg-2 d-md-block bg-light sidebar collapse'
      >
        <div className='position-sticky pt-3 sidebar-sticky'>
          <ul className='nav flex-column'>
            <li className='nav-item'>
              <Link

                to='/panel/dashboard'
                className='nav-link active'
                aria-current='page'
              >
                <span
                  data-feather='home'
                  className='align-text-bottom'
                ></span>
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/panel/usage'>
                <span
                  data-feather='file'
                  className='align-text-bottom'
                ></span>
                Power Consumption
              </Link>
            </li>
            <li className='nav-item'>
              <Link

                className='nav-link'
                to='/panel/savingmethods'
              >
                <span
                  data-feather='shopping-cart'
                  className='align-text-bottom'
                ></span>
                Saving Methods
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/panel/devices'>
                <span
                  data-feather='users'
                  className='align-text-bottom'
                ></span>
                  <span type="button">Devices</span>
                  <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Room-1</a>
                    <a className="dropdown-item" href="#">Room-2</a>
                    <a className="dropdown-item" href="/">Room-3</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/panel/devices">All</a>
                  </div>
              </Link>
            </li>
            <li className='nav-item'>
              <Link

                className='nav-link'
                to='/panel/energycalculator'
              >
                <span
                  data-feather='bar-chart-2'
                  className='align-text-bottom'
                ></span>
                Energy Calculator
              </Link>
            </li>
            <li className='nav-item'>
              <Link

                className='nav-link'
                to='/panel/integrations'
              >
                <span
                  data-feather='layers'
                  className='align-text-bottom'
                ></span>
                Integrations
              </Link>
            </li>
          </ul>

          <h6
            className='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-uppercase'
          >
            <span>Saved reports</span>
          </h6>
          <ul className='nav flex-column mb-2'>
            <li className='nav-item'>
              <a className='nav-link'>
                <span
                  data-feather='file-text'
                  className='align-text-bottom'
                ></span>
                Current month
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                <span
                  data-feather='file-text'
                  className='align-text-bottom'
                ></span>
                Last quarter
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                <span
                  data-feather='file-text'
                  className='align-text-bottom'
                ></span>
                Social engagement
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                <span
                  data-feather='file-text'
                  className='align-text-bottom'
                ></span>
                Year-end sale
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
