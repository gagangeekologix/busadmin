    // src/DeleteBusStop.js

import React, { useState } from 'react';
import { deleteBusStop } from '../api';

function DeleteBusStop() {
  const [busStopId, setBusStopId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDelete = async () => {
    try {
      await deleteBusStop(busStopId);
      setSuccessMessage('Bus stop deleted successfully');
    } catch (error) {
      setErrorMessage('Error deleting bus stop');
    }
  };

  return (
    <div>
      <h2 className='mb-10 text-3xl'>Delete Bus Stop</h2>
      <input
        className=' p-2 px-5 m-3 rounded-md'
        type="text"
        placeholder="Bus Stop ID"
        value={busStopId}
        onChange={(e) => setBusStopId(e.target.value)}
      />
      <button className=' bg-zinc-950 p-2 px-5 m-3 rounded-md' onClick={handleDelete}>Delete Bus Stop</button>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default DeleteBusStop;
