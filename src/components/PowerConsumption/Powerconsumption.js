import { Link, Outlet } from 'react-router-dom';

import { useGlobalData } from '../../context/data/DataState';

export default function Devices(props) {
  // console.log(kitchen);
  const { loading } = useGlobalData();

  if (loading) return <div>Loading...</div>;
  return (
    <>
      <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
          <h1 className='h2'>Device</h1>
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
                Export
              </button>
            </div>
            <Link to="/panel/powerconsumption/main"
              type='button'
              className=' mx-2  btn btn-sm btn-outline-secondary'
            >
              <span
                data-feather='calendar'
                className='align-text-bottom'
              ></span>
              Main Line Comsumption
            </Link>
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

        {/* <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas> */}

        <div className='container-fluid'>
          <div className="card">
            <div className="card-body d-flex">
             <Link to="/panel/powerconsumption/zone_A" className="card border-secondary nav-link">
                <h5>Zone-A</h5>
             </Link>
             <Link to="/panel/powerconsumption/zone_B" className="card border-secondary nav-link">
                <h5>Zone-B</h5>
             </Link>
             <Link to ="/panel/powerconsumption/zone_C" className="card border-secondary nav-link">
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
