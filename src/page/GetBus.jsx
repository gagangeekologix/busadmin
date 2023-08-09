import React, { useState, useEffect } from 'react';
import { getBus, listBuses } from '../api';
import Select from 'react-select';

function GetBus() {
  const [busId, setBusId] = useState('');
  const [busDetails, setBusDetails] = useState(null);
  const [busOptions, setBusOptions] = useState([]);

  useEffect(() => {
    fetchBusOptions();
  }, []);

  const fetchBusOptions = async () => {
    try {
      const buses = await listBuses();
      const options = buses.map(bus => ({
        value: bus._id,
        label: bus.name
      }));
      setBusOptions(options);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetBus = async () => {
    try {
      const busData = await getBus(busId);
      setBusDetails(busData);
    } catch (error) {
      alert('Error fetching bus details: ' + error.message);
    }
  };

  return (
    <div>
      <h2 className='mb-10 text-3xl'>Get Bus Details by ID</h2>
      <div>
        <label>Select Bus:</label>
        <Select
          className='p-2 px-5 w-96 m-3 text-black rounded-md'
          value={busId}
          onChange={(selectedOption) => setBusId(selectedOption.value)}
          options={busOptions}
        />
      </div>
      <button className=' bg-zinc-950 p-2 px-5 m-3 rounded-md' onClick={handleGetBus}>Get Bus Details</button>
      {busDetails && (
        <div>
          <h3>Bus Details</h3>
          <p>Name: {busDetails.name}</p>
          <p>Route: {busDetails.route.map(stop => stop.name).join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default GetBus;
