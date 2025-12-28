import React, { useState } from 'react';

export default function Energycalculator() {
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const [values, setValues] = useState({
        wattage: '',
        hours: '',
        rate: '',
        days: ''
    });

    const handleChange = (e) => {
        setValues({ ...values, [e.target.id]: e.target.value });
        setError('');
        setResult(null);
    };

    const calculate = () => {
        const wattage = parseFloat(values.wattage);
        const hours = parseFloat(values.hours);
        const rate = parseFloat(values.rate);
        const days = parseFloat(values.days);

        if (isNaN(wattage) || isNaN(hours) || isNaN(rate) || isNaN(days)) {
            setError('Please enter valid numeric values for all fields.');
            return;
        }

        const dailyCost = (wattage * hours) / 1000 * rate;
        const totalCost = dailyCost * days;
        setResult(`Total Cost: Rs ${totalCost.toFixed(2)}`);
    }

    return (
        <div className="w-full">
            <div className='flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-gray-200'>
                <h1 className='text-3xl font-bold text-gray-900'>Electricity Calculator</h1>
            </div>

            <div className="max-w-xl p-6 mx-auto bg-white border border-gray-100 shadow-lg rounded-xl">
                <h2 className="mb-6 text-xl font-bold text-gray-800">Cost Calculator</h2>

                <div className="space-y-4">
                    <div>
                        <label htmlFor="wattage" className="block mb-1 text-sm font-medium text-gray-700">Appliance Wattage (W)</label>
                        <input
                            type="number"
                            id="wattage"
                            value={values.wattage}
                            onChange={handleChange}
                            min="1"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="e.g. 1000"
                        />
                    </div>

                    <div>
                        <label htmlFor="hours" className="block mb-1 text-sm font-medium text-gray-700">Hours Used Per Day</label>
                        <input
                            type="number"
                            id="hours"
                            value={values.hours}
                            onChange={handleChange}
                            min="1"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="e.g. 5"
                        />
                    </div>

                    <div>
                        <label htmlFor="rate" className="block mb-1 text-sm font-medium text-gray-700">Rate per kWh (Rs)</label>
                        <input
                            type="number"
                            id="rate"
                            value={values.rate}
                            onChange={handleChange}
                            min="0"
                            step="0.01"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="e.g. 8.50"
                        />
                    </div>

                    <div>
                        <label htmlFor="days" className="block mb-1 text-sm font-medium text-gray-700">Number of Days</label>
                        <input
                            type="number"
                            id="days"
                            value={values.days}
                            onChange={handleChange}
                            min="1"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="e.g. 30"
                        />
                    </div>

                    {error && (
                        <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg">
                            {error}
                        </div>
                    )}

                    <button
                        onClick={calculate}
                        className="w-full py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Calculate Cost
                    </button>

                    {result && (
                        <div className="p-4 mt-6 text-center bg-green-50 border border-green-100 rounded-lg">
                            <span className="text-lg font-bold text-green-700">{result}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
