import React from 'react';
import { useGlobalData } from '../../context/data/DataState';
import { ResponsiveLine } from '@nivo/line';
// import { Link } from "react-router-dom";


export default function Savingmethods() {

    const { predictDataGraph } = useGlobalData();

    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Saving Methods</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                        </div>
                        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar" className="align-text-bottom"></span>
                            This week
                        </button>
                    </div>
                </div>

                {/* <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas> */}

                <div className="container-fluid">
                    <h2>Prediction Of Power Consumption Of Next Month</h2>
                    <div className="prevTrend">
                    <div
                className='predicTrend'
                style={{ height: '50vh', width: '100%' }}
            >
                <ResponsiveLine
                    data={predictDataGraph}
                    margin={{ bottom: 60, left: 60, right: 30, top: 50 }}
                    xScale={{ type: 'point' }}
                    curve='linear'
                    lineWidth={3}
                    // yScale={{
                        // type: 'point',
                    //     min: 'auto',
                    //     max: 'auto',
                    //     stacked: true,
                    //     reverse: false,
                    // }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        // tickSize: 7,
                        tickPadding: 10,
                        tickRotation: 0,
                        legend: 'Seconds',
                        legendOffset: 36,
                        legendPosition: 'middle',
                    }}
                    axisLeft={{
                        // tickSize: 2,
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
            </main>

        </>
    )
}
