import React from 'react';
import { ResponsiveLine } from '@nivo/line';
// import { Link } from "react-router-dom";

import { useGlobalData } from '../../context/data/DataState';

export default function UsageC(props) {
  const { bulbGraph, heaterGraph, inductionGraph } = useGlobalData();

  return (
    <>
      <div
        className='predicTrend'
        style={{ height: '50vh', width: '70vw' }}
      >
        <ResponsiveLine
          data={inductionGraph}
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
    </>
  );
}
