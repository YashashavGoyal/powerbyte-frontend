import { useGlobalData } from '../../context/data/DataState';

export default function Devices(props) {
  // console.log(kitchen);
  const { loading, kitchen } = useGlobalData();

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
          <div className='table-responsive' style={{borderRadius: `20px`}}>
            <table className='table table-striped table-bordered'>
              <thead className='bg-success'>
                <tr>
                  <th
                    style={{ color: `white`, fontSize: `20px` }}
                    className='center'
                    colSpan={4}
                    scope='col'
                  >
                    Room-1 Data
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='table-primary'>
                  <th className='center' colSpan={2} scope='col'>
                    Temperature (oC)
                  </th>
                  <th className='center' colSpan={2} scope='col'>
                    {kitchen['Temprature(oC)']} °C
                  </th>
                </tr>
                <tr className='table-primary'>
                  <th scope='col'>Device</th>
                  <th scope='col'>Power (Watt)</th>
                  <th scope='col'>Voltage (Volt)</th>
                  <th scope='col'>Current (A)</th>
                </tr>
                <tr className='table-primary'>
                  <th scope='row'>Bulb</th>
                  <td>{kitchen.Bulb['Power(Watt)']}</td>
                  <td>{kitchen.Bulb['Voltage(Volt)']}</td>
                  <td>{kitchen.Bulb['Current(A)']}</td>
                </tr>
                <tr className='table-primary'>
                  <th scope='row'>Heater</th>
                  <td>{kitchen.Heater['Power(Watt)']}</td>
                  <td>{kitchen.Heater['Voltage(Volt)']}</td>
                  <td>{kitchen.Heater['Current(A)']}</td>
                </tr>
                <tr className='table-primary'>
                  <th scope='row'>Fan</th>
                  <td>{kitchen.fan['Power(Watt)']}</td>
                  <td>{kitchen.fan['Voltage(Volt)']}</td>
                  <td>{kitchen.fan['Current(A)']}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
