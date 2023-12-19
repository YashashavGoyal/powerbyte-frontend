import React from 'react';

import { useGlobalData } from '../../context/data/DataState';

export default function DeviceA() {

    const { kitchen } = useGlobalData();

  return (
    <>
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
    </>
  )
}
