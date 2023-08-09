import React, { useState, useEffect } from 'react';
import { getBus, listBusStops, listBuses, updateBus } from '../api';
import Select from 'react-select';

function UpdateBus() {
  const [busId, setBusId] = useState('');
  const [newBusName, setNewBusName] = useState('');
  const [selectedStops, setSelectedStops] = useState([]);
  const [availableStops, setAvailableStops] = useState([]);
  const [busOptions, setBusOptions] = useState([]);

  useEffect(() => {
    fetchBusOptions();
    fetchAvailableStops();
  }, []);
  const stopOptions = availableStops.map(stop => ({
    value: stop._id,
    label: stop.name
  }));
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

  const fetchAvailableStops = async () => {
    try {
      const stops = await listBusStops();
      setAvailableStops(stops);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetBus = async () => {
    try {
      const busData = await getBus(busId);
      setNewBusName(busData.name);
      setSelectedStops(busData.route);
    } catch (error) {
      alert('Error fetching bus details: ' + error.message);
    }
  };

  const handleUpdateBus = async () => {
    try {
      const updatedData = { name: newBusName, route: selectedStops };
      await updateBus(busId, updatedData);
      alert('Bus updated successfully');
    } catch (error) {
      alert('Error updating bus: ' + error.message);
    }
  };

  const handleSelectChange = (selectedOptions) => {
    setSelectedStops(selectedOptions);
  };

  return (
    <div>
      <h2 className='mb-10 text-3xl'>Update Bus</h2>
      <div>
        <label>Select Bus:</label>
        <Select
          className='p-2 px-5 w-96 m-3 text-black rounded-md'
          value={busId}
          onChange={(selectedOption) => setBusId(selectedOption.value)}
          options={busOptions}
        />
        <button onClick={handleGetBus}>Get Bus Details</button>
      </div>
      <div>
        <label>New Bus Name:</label>
        <input className=' p-2 px-5 m-3 rounded-md' type="text" value={newBusName} onChange={(e) => setNewBusName(e.target.value)} />
      </div>
      <div>
        <label>New Route (select multiple stops):</label>
        <Select
          className='p-2 px-5 m-3 me-96 text-black rounded-md'
          isMulti
          value={selectedStops}
          onChange={handleSelectChange}
          options={stopOptions}
        />
      </div>
      <button className=' bg-zinc-950 p-2 px-5 m-3 rounded-md' onClick={handleUpdateBus}>Update Bus</button>
    </div>
  );
}

export default UpdateBus;
