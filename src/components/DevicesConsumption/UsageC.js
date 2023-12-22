import React from 'react';
import { ResponsiveLine } from '@nivo/line';
// import { Link } from "react-router-dom";

import { useGlobalData } from '../../context/data/DataState';

export default function UsageC(props) {
  const { inductionGraphCurrent, inductionGraphVoltage, inductionGraphPower } = useGlobalData();

  return (
    <> {/* <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas> */}
      <div
        className='predicTrend'
        style={{ height: '50vh', width: '100%' }}
      >
        <ResponsiveLine
          data={inductionGraphCurrent}
          margin={{ bottom: 60, left: 60, right: 30, top: 50 }}
          xScale={{ type: 'point' }}
          curve='step'
          lineWidth={3}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 7,
            tickPadding: 10,
            tickRotation: 0,
            legend: 'Seconds',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            tickSize: 2,
            tickPadding: 10,
            tickRotation: 0,
            legend: 'Current',
            legendOffset: -50,
            legendPosition: 'middle',
          }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
        />
      </div>


      <div
        className='predicTrend'
        style={{ height: '50vh', width: '100%' }}
      >
        <ResponsiveLine
          data={inductionGraphVoltage}
          margin={{ bottom: 60, left: 60, right: 30, top: 50 }}
          xScale={{ type: 'point' }}
          curve='step'
          lineWidth={3}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 7,
            tickPadding: 10,
            tickRotation: 0,
            legend: 'Seconds',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            tickSize: 2,
            tickPadding: 10,
            tickRotation: 0,
            legend: 'Voltage',
            legendOffset: -50,
            legendPosition: 'middle',
          }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
        />
      </div>

      <div
        className='predicTrend'
        style={{ height: '50vh', width: '100%' }}
      >
        <ResponsiveLine
          data={inductionGraphPower}
          margin={{ bottom: 60, left: 60, right: 30, top: 50 }}
          xScale={{ type: 'point' }}
          curve='step'
          lineWidth={3}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 7,
            tickPadding: 10,
            tickRotation: 0,
            legend: 'Seconds',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            tickSize: 2,
            tickPadding: 10,
            tickRotation: 0,
            legend: 'Power',
            legendOffset: -50,
            legendPosition: 'middle',
          }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
        />
      </div>
    </>
  );
}
