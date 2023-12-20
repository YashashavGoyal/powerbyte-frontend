import React, { useEffect, useRef } from 'react';

function Chart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartCtx = chartRef.current.getContext('2d');

    const voltageData = [12, 19, 3, 5, 2, 3]; // Example voltage data
    const currentData = [7, 11, 5, 8, 3, 7]; // Example current data
    const labels = ['0', '1', '2', '3', '4', '5']; // Time labels

    new window.Chart(chartCtx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Voltage',
            data: voltageData,
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1,
          },
          {
            label: 'Current',
            data: currentData,
            fill: false,
            borderColor: 'rgba(192, 75, 192, 1)',
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <div>
      <h2>Voltage and Current Chart</h2>
      <canvas ref={chartRef} width={600} height={400} />
    </div>
  );
};

export default Chart;
