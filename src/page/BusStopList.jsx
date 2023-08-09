// src/BusStopList.js

import React, { useState, useEffect } from 'react';
import { listBusStops } from '../api';

function BusStopList() {
  const [busStops, setBusStops] = useState([]);

  useEffect(() => {
    fetchBusStops();
  }, []);

  const fetchBusStops = async () => {
    try {
      const response = await listBusStops();
      setBusStops(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className='mb-10 text-3xl'>List Bus Stops</h2>
      <ul>
        {busStops.map((busStop) => (
          <div className=' bg-slate-500 border text-2xl'>
          <li className=' me-5' key={busStop._id}>Stops Name: <span className='ms-5'> {busStop.name}</span></li>
          </div>))}
      </ul>
    </div>
  );
}

export default BusStopList;
