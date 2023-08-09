import React, { useState, useEffect } from 'react';
import { getBusByStops, listBusStops } from './api';

function BusSearch() {
  const [fromStop, setFromStop] = useState('');
  const [toStop, setToStop] = useState('');
  const [busNames, setBusNames] = useState([]);
  const [busStops, setBusStops] = useState([]);

  // Fetch bus stops when the component mounts
  useEffect(() => {
    fetchBusStops();
  }, []);

  const fetchBusStops = async () => {
    try {
      // Assuming you have an API function to get a list of bus stops
      const response = await listBusStops(); // Replace with your API call
      setBusStops(response); // Assuming the response is an array of bus stops
    } catch (error) {
      console.error(error);
    }
  };

  const searchBus = async () => {
    try {
      const response = await getBusByStops(fromStop, toStop);
      setBusNames(response.buses);
    } catch (error) {
      console.error(error);
      setBusNames(['Bus not found']);
    }
  };

  return (
    <div>
      <h1 className='mb-10 text-3xl'>Bus Search</h1>
      <select
        className='p-2 px-5 m-3  text-black rounded-md'
        value={fromStop}
        onChange={(e) => setFromStop(e.target.value)}
      >
        <option value=''>Select From Stop</option>
        {busStops.map((busStop) => (
          <option key={busStop.id} value={busStop.id}>
            {busStop.name}
          </option>
        ))}
      </select>
      <select
        className='p-2 px-5 m-3 text-black rounded-md'
        value={toStop}
        onChange={(e) => setToStop(e.target.value)}
      >
        <option value=''>Select To Stop</option>
        {busStops.map((busStop) => (
          <option key={busStop.id} value={busStop.id}>
            {busStop.name}
          </option>
        ))}
      </select>
      <button className=' bg-zinc-950 p-2 px-5 m-3 rounded-md' onClick={searchBus}>Search Bus</button>
      <div>
        {busNames.length === 0 ? (
          <p>No buses found for the given stops.</p>
        ) : (
          <div>
            <p>Matching Buses:</p>
            <ul>
              {busNames.map((busName, index) => (
                <li key={index}>{busName}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default BusSearch;
