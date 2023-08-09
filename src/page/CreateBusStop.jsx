// src/CreateBusStop.js

import React, { useState } from 'react';
import { createBusStop } from '../api';

function CreateBusStop() {
  const [busStopName, setBusStopName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCreate = async () => {
    try {
      await createBusStop({ name: busStopName });
      setSuccessMessage('Bus stop created successfully');
    } catch (error) {
      setErrorMessage('Error creating bus stop');
    }
  };

  return (
    <div>
      <h2 className='mb-10 text-3xl'>Create Bus Stop</h2>
      <input
        className=' p-2 px-5 m-3 rounded-md'
        type="text"
        placeholder="Bus Stop Name"
        value={busStopName}
        onChange={(e) => setBusStopName(e.target.value)}
      />
      <button className=' bg-zinc-950 p-2 px-5 m-3 rounded-md' onClick={handleCreate}>Create Bus Stop</button>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default CreateBusStop;
