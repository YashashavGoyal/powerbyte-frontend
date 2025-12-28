import React from 'react';
import { useGlobalData } from '../../context/data/DataState';
import { ResponsiveLine } from '@nivo/line';
// import { Link } from "react-router-dom";


export default function Savingmethods() {

    const { predictDataGraph, downloadURL } = useGlobalData();
    const month = new Date().toLocaleDateString('default', { month: 'long' });

    return (
        <div className="w-full">
            {/* Header Section */}
            <div className='flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-gray-200'>
                <h1 className='text-3xl font-bold text-gray-900'>Saving Methods</h1>
                <div className='flex items-center space-x-2'>
                    <div className='flex shadow-sm rounded-md'>
                        <button
                            type='button'
                            className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'
                        >
                            Share
                        </button>
                        <a
                            href={downloadURL}
                            className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'
                        >
                            Export
                        </a>
                    </div>
                    <button
                        type='button'
                        className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                    >
                        <span data-feather='calendar' className='w-4 h-4 mr-2 text-gray-500'></span>
                        This week
                    </button>
                </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Prediction Of Power Consumption Of Next Month</h2>
                    <h4 className="text-gray-500 uppercase font-semibold text-sm tracking-wide">- {month}</h4>
                </div>

                <div className="h-[500px] bg-gray-50 rounded-lg border border-gray-100 p-4 overflow-x-auto">
                    <div className="min-w-[800px] h-full">
                        <ResponsiveLine
                            data={predictDataGraph}
                            margin={{ bottom: 100, left: 60, right: 30, top: 50 }}
                            xScale={{ type: 'point' }}
                            curve='linear'
                            lineWidth={3}
                            axisTop={null}
                            axisRight={null}
                            axisBottom={{
                                tickPadding: 10,
                                tickRotation: -45,
                                legend: 'Date',
                                legendOffset: 70,
                                legendPosition: 'middle',
                            }}
                            axisLeft={{
                                tickPadding: 10,
                                tickRotation: 0,
                                legend: 'Predicted Power',
                                legendOffset: -50,
                                legendPosition: 'middle',
                            }}
                            colors={{ scheme: 'set1' }}
                            pointSize={10}
                            pointColor={{ theme: 'background' }}
                            pointBorderWidth={2}
                            pointBorderColor={{ from: 'serieColor' }}
                            pointLabelYOffset={-12}
                            useMesh={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
