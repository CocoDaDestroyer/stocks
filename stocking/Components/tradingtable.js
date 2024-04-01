import React from 'react';

const TradesTable = ({ tradingData }) => {
  return (
    <div className="table-container" style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Ticker</th>
            <th>Volume</th>
            <th>Stock Price</th>
            <th>Total Transaction Value</th>
          </tr>
        </thead>
        <tbody>
          {tradingData.map(trade => (
            <tr key={trade._id}>
              <td>{trade.Date}</td>
              <td>{trade.Ticker}</td>
              <td>{trade.Volume}</td>
              <td>{trade.Price}</td>
              <td>{trade.TotalTradePrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradesTable;