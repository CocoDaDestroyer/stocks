import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Plot from 'react-plotly.js';
import TradesTable from './tradingtable';
import NetWorthGraph from './moneygraph';
import FinalNetWorth from './finalnetworth';
const Result = () => {
    const { strategy, model } = useParams();
    const [networths, setNetworths] = useState([]);
    const [trading, setTrading] = useState([]);
    console.log(strategy)
    console.log(model)
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/fetch-data/${strategy}/${model}`);

        const networthsData = response.data.networthsData;
        const tradesData = response.data.tradesData;
        setNetworths(networthsData);
        setTrading(tradesData);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
    return (
        <div>
          <FinalNetWorth netWorths = {networths}/>
          <NetWorthGraph netWorthData={networths}/>
          <h2>Trades Table</h2>
          <TradesTable tradingData={trading} /> 
          
        </div>
      );
}
    
export default Result;