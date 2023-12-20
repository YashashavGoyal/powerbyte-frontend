import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidemenu() {
  return (
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
              <span data-feather='home' className='align-text-bottom'></span>
              Dashboard
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/panel/usage'>
              <span data-feather='file' className='align-text-bottom'></span>
              Energy Consumption
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/panel/savingmethods'>
              <span
                data-feather='shopping-cart'
                className='align-text-bottom'
              ></span>
              Saving Methods
            </Link>
          </li>
          <li className='nav-item'>
            <div className='nav-link d-flex'>
              <span data-feather='users' className='align-text-bottom'></span>
              <Link
                className='nav-link'
                style={{ display: `inline-block` }}
                to='/panel/powerconsumption'
              >
                <span type='button'>Power Consumption</span>
              </Link>
              <button
                type='button'
                className='btn dropdown-toggle dropdown-toggle-split'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <span className='sr-only'>Toggle Dropdown</span>
              </button>
              <div className='dropdown-menu'>
                <Link to='/panel/powerconsumption/zone_A' className='dropdown-item'>
                  Zone-A
                </Link>
                <Link to='/panel/powerconsumption/zone_B' className='dropdown-item'>
                  Zone-B
                </Link>
                <Link to='/panel/powerconsumption/zone_C' className='dropdown-item'>
                  Zone-C
                </Link>
                <div className='dropdown-divider'></div>
                <a className='dropdown-item' href='/panel/devices'>
                  All
                </a>
              </div>
            </div>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/panel/energycalculator'>
              <span
                data-feather='bar-chart-2'
                className='align-text-bottom'
              ></span>
              Energy Calculator
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/panel/integrations'>
              <span data-feather='layers' className='align-text-bottom'></span>
              Integrations
            </Link>
          </li>
        </ul>

        <h6 className='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-uppercase'>
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
  );
}
