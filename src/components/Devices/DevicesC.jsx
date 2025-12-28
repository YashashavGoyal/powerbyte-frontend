import React from 'react';
import { useGlobalData } from '../../context/data/DataState';

export default function DevicesC() {

  const { kitchen } = useGlobalData();

  function calculateElectricityCost(powerWatt) {
    const powerKW = powerWatt / 1000;
    const energyDayKWh = powerKW * 24;
    const energyMonthKWh = energyDayKWh * 30;

    let ratePerUnit;
    if (energyMonthKWh <= 50) ratePerUnit = 2;
    else if (energyMonthKWh <= 150) ratePerUnit = 2.5;
    else if (energyMonthKWh <= 250) ratePerUnit = 5.25;
    else if (energyMonthKWh <= 500) ratePerUnit = 6.3;
    else if (energyMonthKWh <= 800) ratePerUnit = 7.1;
    else ratePerUnit = 7.1;

    const costPerDay = (energyDayKWh * ratePerUnit).toFixed(2);
    const costPerMonth = (energyMonthKWh * ratePerUnit).toFixed(2);

    return { costPerDay, costPerMonth };
  }

  return (
    <div className="space-y-8">
      {/* Zone Data Table */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-800">Zone-C Data</h3>
          <span className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            Temp: {kitchen['Temprature(oC)']} °C
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-3 text-xs font-semibold tracking-wider text-gray-500 uppercase whitespace-nowrap">Device</th>
                <th className="px-6 py-3 text-xs font-semibold tracking-wider text-gray-500 uppercase whitespace-nowrap">Active Power (Watt)</th>
                <th className="px-6 py-3 text-xs font-semibold tracking-wider text-gray-500 uppercase whitespace-nowrap">Voltage (Volt)</th>
                <th className="px-6 py-3 text-xs font-semibold tracking-wider text-gray-500 uppercase whitespace-nowrap">Current (A)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">Bulb</td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{kitchen.Bulb['ActivePower']} W</td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{kitchen.Bulb['Voltage(Volt)']} V</td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{kitchen.Bulb['Current(A)']} A</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">Induction</td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{kitchen.Induction['ActivePower']} W</td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{kitchen.Induction['Voltage(Volt)']} V</td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{kitchen.Induction['Current(A)']} A</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">Heater</td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{kitchen.Heater['ActivePower']} W</td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{kitchen.Heater['Voltage(Volt)']} V</td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{kitchen.Heater['Current(A)']} A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Bill Generated Table */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 bg-green-50 border-b border-green-100">
          <h3 className="text-lg font-bold text-green-800">Bill Estimation</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-3 text-xs font-semibold tracking-wider text-gray-500 uppercase whitespace-nowrap">Device</th>
                <th className="px-6 py-3 text-xs font-semibold tracking-wider text-gray-500 uppercase whitespace-nowrap">Units (kW)</th>
                <th className="px-6 py-3 text-xs font-semibold tracking-wider text-gray-500 uppercase whitespace-nowrap">Cost / Day (Rs)</th>
                <th className="px-6 py-3 text-xs font-semibold tracking-wider text-gray-500 uppercase whitespace-nowrap">Cost / Month (Rs)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">Bulb</td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{(kitchen.Bulb['ActivePower'] / 1000).toFixed(3)} kW</td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{calculateElectricityCost(kitchen.Bulb['ActivePower']).costPerDay}</td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{calculateElectricityCost(kitchen.Bulb['ActivePower']).costPerMonth}</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">Induction</td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{(kitchen.Induction['ActivePower'] / 1000).toFixed(3)} kW</td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{calculateElectricityCost(kitchen.Induction['ActivePower']).costPerDay}</td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{calculateElectricityCost(kitchen.Induction['ActivePower']).costPerMonth}</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">Heater</td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{(kitchen.Heater['ActivePower'] / 1000).toFixed(3)} kW</td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{calculateElectricityCost(kitchen.Heater['ActivePower']).costPerDay}</td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{calculateElectricityCost(kitchen.Heater['ActivePower']).costPerMonth}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
