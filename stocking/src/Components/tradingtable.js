import React from 'react';


const TradesTable = ({ tradingData }) => {
  return (
    <div className="trades-table-container">
      <div className="trades-table-wrapper">
        <table className="trades-table">
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
            {tradingData.map((trade, index) => (
              <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{new Date(trade.Date).toLocaleDateString()}</td>
                <td>{trade.Ticker}</td>
                <td>{parseFloat(trade.Volume).toFixed(2)}</td>
                <td>{parseFloat(trade.Price).toFixed(2)}</td>
                <td>{parseFloat(trade.TotalTradePrice).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradesTable;