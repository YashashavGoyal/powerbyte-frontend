import React from 'react';

import { useGlobalData } from '../../context/data/DataState';

export default function DevicesC() {

    const { kitchen } = useGlobalData();
    // console.log(kitchen);

    function calculateElectricityCost(powerWatt) {
      // Convert power from watts to kilowatts
      const powerKW = powerWatt / 1000; // 1 kW = 1000 W
    
      // Calculate energy consumed per day and per month
      const energyDayKWh = powerKW * 24; // kWh per day
      const energyMonthKWh = energyDayKWh * 30; // kWh per month
    
      // Tiered pricing structure
      let ratePerUnit;
      if (energyMonthKWh <= 50) {
        ratePerUnit = 2;
      } else if (energyMonthKWh <= 150) {
        ratePerUnit = 2.5;
      } else if (energyMonthKWh <= 250) {
        ratePerUnit = 5.25;
      } else if (energyMonthKWh <= 500) {
        ratePerUnit = 6.3;
      } else if (energyMonthKWh <= 800) {
        ratePerUnit = 7.1;
      } else {
        ratePerUnit = 7.1; // For consumption above 800 kWh
      }
    
      // Calculate cost per day and per month
      const costPerDay = (energyDayKWh * ratePerUnit).toFixed(2);
      const costPerMonth = (energyMonthKWh * ratePerUnit).toFixed(2);
    
      return { costPerDay, costPerMonth };
    }    

    function bill()  {


      return (<table className='table table-striped table-bordered'>
      <thead className='bg-success'>
        <tr>
          <th
            style={{ color: `white`, fontSize: `20px` }}
            className='center'
            colSpan={4}
            scope='col'
          >
            Bill Generated
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className='table-primary'>
          <th className='center' colSpan={2} scope='col'>
            Device Units
          </th>
          <th className='center' colSpan={2} scope='col'>
            Charge (in Rs.)
          </th>
        </tr>
        <tr className='table-primary'>
          <th scope='col'>Device</th>
          <th scope='col'>Units</th>
          <th scope='col'>Per Day</th>
          <th scope='col'>Per Month</th>
        </tr>
        <tr className='table-primary'>
          <th scope='row'>Bulb</th>
          <td>{(kitchen.Bulb['Power(Watt)']/1000).toFixed(2)}</td>
          <td>{calculateElectricityCost(kitchen.Bulb['Power(Watt)']).costPerDay}</td>
          <td>{calculateElectricityCost(kitchen.Bulb['Power(Watt)']).costPerMonth}</td>
        </tr>
        <tr className='table-primary'>
        <th scope='row'>Induction</th>
          <td>{(kitchen.Induction['Power(Watt)']/1000).toFixed(2)}</td>
          <td>{calculateElectricityCost(kitchen.Induction['Power(Watt)']).costPerDay}</td>
          <td>{calculateElectricityCost(kitchen.Induction['Power(Watt)']).costPerMonth}</td>
        </tr>
        <tr className='table-primary'>
        <th scope='row'>Heater</th>
          <td>{(kitchen.Heater['Power(Watt)']/1000).toFixed(2)}</td>
          <td>{calculateElectricityCost(kitchen.Heater['Power(Watt)']).costPerDay}</td>
          <td>{calculateElectricityCost(kitchen.Heater['Power(Watt)']).costPerMonth}</td>
        </tr>
      </tbody>
    </table>)
    }


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
                    Zone-C Data
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
                  <th scope='col'>Acive Power (Watt)</th>
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
                  <th scope='row'>Induction</th>
                  <td>{kitchen.Induction['Power(Watt)']}</td>
                  <td>{kitchen.Induction['Voltage(Volt)']}</td>
                  <td>{kitchen.Induction['Current(A)']}</td>
                </tr>
                <tr className='table-primary'>
                  <th scope='row'>Heater</th>
                  <td>{kitchen.Heater['Power(Watt)']}</td>
                  <td>{kitchen.Heater['Voltage(Volt)']}</td>
                  <td>{kitchen.Heater['Current(A)']}</td>
                </tr>
              </tbody>
            </table>
            
            <hr />

            {bill()}            

          </div>
    </>
  )
}
