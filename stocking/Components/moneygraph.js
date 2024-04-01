import React from 'react';
import Plot from 'react-plotly.js';

const NetWorthGraph = ({ netWorthData }) => {
  // Extracting dates and net worth values
  const dates = netWorthData.map(data => data.Date);
  const netWorth = netWorthData.map(data => data.NetWorth);

  return (
    <div>
      <h2>Value Over Time</h2>
      <Plot
        data={[
          {
            x: dates,
            y: netWorth,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'blue' },
          },
        ]}
        layout={{ width: 800, height: 400, title: 'Value Over Time' }}
      />
    </div>
  );
};

export default NetWorthGraph;