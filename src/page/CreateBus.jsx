import React, { useEffect, useState } from 'react';
import { createBus, listBusStops } from '../api';
import Select from 'react-select';

function CreateBus() {
  const [busName, setBusName] = useState('');
  const [selectedStops, setSelectedStops] = useState([]);
  const [availableStops, setAvailableStops] = useState([]);

  useEffect(() => {
    fetchAvailableStops();
  }, []);

  const fetchAvailableStops = async () => {
    try {
      const stops = await listBusStops();
      setAvailableStops(stops);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateBus = async () => {
    try {
      const busData = { name: busName, route: selectedStops.map(stop => stop.value) };
      await createBus(busData);
      alert('Bus created successfully');
    } catch (error) {
      alert('Error creating bus: ' + error.message);
    }
  };

  const handleSelectChange = (selectedOptions) => {
    setSelectedStops(selectedOptions);
  };

  const stopOptions = availableStops.map(stop => ({
    value: stop._id,
    label: stop.name
  }));

  return (
    <div>
      <h2 className='mb-10 text-3xl'>Create Bus</h2>
      <div>
        <label>Bus Name:</label>
        <input className='p-2 text-black px-5 m-3 rounded-md' type="text" value={busName} onChange={(e) => setBusName(e.target.value)} />
      </div>
      <div className=''>
        <label>Route (select multiple stops):</label>
        <Select
          className='p-2 px-5 m-3 text-black rounded-md'
          isMulti
          value={selectedStops}
          onChange={handleSelectChange}
          options={stopOptions}
        />
      </div>
      <button className='bg-zinc-950 p-2 px-5 m-3 rounded-md' onClick={handleCreateBus}>Create Bus</button>
    </div>
  );
}

export default CreateBus;
