import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { useGlobalData } from '../../context/data/DataState';

export default function UsageC(props) {
  const { inductionGraphCurrent, inductionGraphVoltage, inductionGraphPower } = useGlobalData();

  return (
    <>
      <div className="w-full p-4 mb-8 bg-white rounded-lg shadow-sm">
        <div className="h-[50vh] overflow-x-auto">
          <div className="min-w-[800px] h-full">
            <ResponsiveLine
              data={inductionGraphCurrent}
              margin={{ bottom: 100, left: 60, right: 30, top: 50 }}
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
                tickRotation: -45,
                legend: 'Seconds',
                legendOffset: 70,
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


      <div className="w-full p-4 mb-8 bg-white rounded-lg shadow-sm">
        <div className="h-[50vh] overflow-x-auto">
          <div className="min-w-[800px] h-full">
            <ResponsiveLine
              data={inductionGraphVoltage}
              margin={{ bottom: 100, left: 60, right: 30, top: 50 }}
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
                tickRotation: -45,
                legend: 'Seconds',
                legendOffset: 70,
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

      <div className="w-full p-4 mb-8 bg-white rounded-lg shadow-sm">
        <div className="h-[50vh] overflow-x-auto">
          <div className="min-w-[800px] h-full">
            <ResponsiveLine
              data={inductionGraphPower}
              margin={{ bottom: 100, left: 60, right: 30, top: 50 }}
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
                tickRotation: -45,
                legend: 'Seconds',
                legendOffset: 70,
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
    </>
  );
}
