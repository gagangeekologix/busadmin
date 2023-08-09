// src/DeleteBus.js

import React, { useState } from 'react';
import { deleteBus } from '../api';

function DeleteBus() {
  const [busId, setBusId] = useState('');

  const handleDeleteBus = async () => {
    try {
      await deleteBus(busId);
      alert('Bus deleted successfully');
    } catch (error) {
      alert('Error deleting bus: ' + error.message);
    }
  };

  return (
    <div>
      <h2 className='mb-10 text-3xl'>Delete Bus</h2>
      <div>
        <label>Bus ID:</label>
        <input className=' p-2 px-5 m-3 rounded-md' type="text" value={busId} onChange={(e) => setBusId(e.target.value)} />
      </div>
      <button className=' bg-zinc-950 p-2 px-5 m-3 rounded-md' onClick={handleDeleteBus}>Delete Bus</button>
      <button className=' bg-zinc-950 p-2 px-5 m-3 rounded-md' onClick={handleDeleteBus}>Delete Bus</button>
    </div>
  );
}

export default DeleteBus;
