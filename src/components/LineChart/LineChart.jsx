import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([['Date', 'Low', 'Open', 'Close', 'High']]);

  useEffect(() => {
    let dataCopy = [['Date', 'Low', 'Open', 'Close', 'High']];
    if (historicalData) {
      historicalData.forEach(item => {
        const date = new Date(item[0]).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' });
        const low = item[3];
        const open = item[1];
        const close = item[4];
        const high = item[2];
        dataCopy.push([date, low, open, close, high]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  const options = {
    legend: 'none',
    bar: { groupWidth: '80%' }, // Adjusting the group width to make candles wider
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: '#a52714' },
      risingColor: { strokeWidth: 0, fill: '#0f9d58' },
    },
    chartArea: { width: '80%', height: '70%' }, // Adjusting chart area to make candles more prominent
    hAxis: {
      format: 'M/d', // Custom date format
     
      titleTextStyle: {
        italic: false,
      },
    },
    vAxis: {
      
      titleTextStyle: {
        italic: false,
      },
    },
  };

  return (
    <Chart
      chartType='CandlestickChart'
      width='100%'
      height='400px'
      data={data}
      options={options}
    />
  );
};

export default LineChart;
