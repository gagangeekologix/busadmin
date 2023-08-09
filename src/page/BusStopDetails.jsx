import React, { useState, useEffect } from 'react';
import { getBusStop, listBusStops } from '../api';

function BusStopDetails() {
  const [busStopId, setBusStopId] = useState('');
  const [busStop, setBusStop] = useState(null);
  const [busStops, setBusStops] = useState([]);

  // Fetch bus stops when the component mounts
  useEffect(() => {
    fetchBusStops();
  }, []);

  const fetchBusStops = async () => {
    try {
      // Assuming you have an API function to get a list of bus stops
      const response = await listBusStops(); // Replace with your API call
      setBusStops(response);
      // console.log(response) // Assuming the response is an array of bus stops
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBusStop = async () => {
    try {
      // console.log("bus stop id ---",busStopId)
      const response = await getBusStop(busStopId);
      setBusStop(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='justify-start'>
      {/* <Navbar/> */}

      <h2 className='mb-10 text-3xl'>Get Bus Stop Details</h2>
      <select
        className='p-2 px-5 text-black m-3 rounded-md'
        value={busStopId}
        onChange={(e) => setBusStopId(e.target.value)}
      >
        <option className='' value=''>Select a Bus Stop</option>
        {busStops.map((busStop) => (
          <option className='' key={busStop._id} value={busStop._id}>
            {busStop.name}
          </option>
        ))}
      </select>
      <button
        className='bg-zinc-950 p-2 px-5 m-3 rounded-md'
        onClick={fetchBusStop}
      >
        Fetch Bus Stop
      </button>
      {busStop && (
        <div>
          <p>Name: {busStop.name}</p>
          {/* Include other details you want to display */}
        </div>
      )}
    </div>
  );
}

export default BusStopDetails;
