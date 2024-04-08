import React from 'react';

const FinalNetWorth = ({ netWorths }) => {
  // Extract the final net worth from the last entry in the net worths array
  const finalNetWorth = netWorths.length > 0 ? parseFloat(netWorths[netWorths.length - 1].NetWorth).toFixed(2) : 0; // Round to 2 decimal places

  return (
    <div>
      <h2>Final Value: ${`${finalNetWorth}`}</h2>
      
      <p>S&P 500 Returns (Excluding Dividends) 1983-1990: 236%</p>
    </div>
  );
};

export default FinalNetWorth;