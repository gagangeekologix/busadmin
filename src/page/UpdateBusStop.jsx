// src/UpdateBusStop.js

import React, { useState } from 'react';
import { updateBusStop } from '../api';

function UpdateBusStop() {
  const [busStopId, setBusStopId] = useState('');
  const [newName, setNewName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUpdate = async () => {
    try {
      await updateBusStop(busStopId, { name: newName });
      setSuccessMessage('Bus stop updated successfully');
    } catch (error) {
      setErrorMessage('Error updating bus stop');
    }
  };

  return (
    <div>
      <h2 className='mb-10 text-3xl'>Update Bus Stop</h2>
      <input
        className=' p-2 px-5 m-3 rounded-md'
        type="text"
        placeholder="Bus Stop ID"
        value={busStopId}
        onChange={(e) => setBusStopId(e.target.value)}
      />
      <input
        className=' p-2 px-5 m-3 rounded-md'
        type="text"
        placeholder="New Name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button className=' bg-zinc-950 p-2 px-5 m-3 rounded-md' onClick={handleUpdate}>Update Bus Stop</button>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default UpdateBusStop;
