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
          value={busOptions.find(option => option.value === busId)} // Find the selected option object
          onChange={(selectedOption) => setBusId(selectedOption.value)} // Set the selected option's value as busId
          options={busOptions}
        />
      </div>
      <button className=' bg-zinc-950 p-2 px-5 m-3 rounded-md' onClick={handleGetBus}>Get Bus Details</button>
      {busDetails && (
        <div>
          <h3>Bus Details</h3>
          <p>Name: {busDetails.name}</p>
          <p>Route: <div class="relative after:absolute me-10 mt-20 after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
            <ol class="relative z-10 flex justify-between text-sm font-medium text-gray-500">
              {busDetails.route.map((stop, index) => (
                <li class="flex items-center gap-2 text-white rounded-md  bg-gray-500 p-2" key={index}>
                  <span class="h-6 w-6 rounded-full text-black bg-gray-100 text-center text-[10px]/6 font-bold">
                    {index + 1}
                  </span>
                  <span class="hidden sm:block">{stop.name}</span>
                </li>
              ))}
            </ol>
          </div></p>
        </div>
      )}

    </div>
  );
}

export default GetBus;
