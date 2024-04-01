import React from 'react';

const FinalNetWorth = ({ netWorths }) => {
  // Extract the final net worth from the last entry in the net worths array
  const finalNetWorth = netWorths.length > 0 ? netWorths[netWorths.length - 1].NetWorth : 0;

  return (
    <div>
      <h2>Final Value</h2>
      <p>{`Final Net Worth: $${finalNetWorth}`}</p>
    </div>
  );
};

export default FinalNetWorth;