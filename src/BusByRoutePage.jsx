// src/BusByRoutePage.js

import React, { useState } from 'react';
import axios from 'axios';

function BusByRoutePage() {
  const [routeName, setRouteName] = useState('');
  const [bus, setBus] = useState(null);
  const [error, setError] = useState('');

  const searchBusByRoute = async () => {
    try {
      setError('');
      const response = await axios.get(`/api/buses/by-route/${routeName}`);
      setBus(response.data);
    } catch (error) {
      setError('Bus not found');
    }
  };

  return (
    <div>
      <h1>Bus Search by Route</h1>
      <input
        type="text"
        placeholder="Route Name"
        value={routeName}
        onChange={(e) => setRouteName(e.target.value)}
      />
      <button onClick={searchBusByRoute}>Search Bus</button>
      {error && <p>{error}</p>}
      {bus && (
        <div>
          <h2>Bus Details</h2>
          <p>Name: {bus.name}</p>
          <p>Route:</p>
          <ul>
            {bus.route.map((stop) => (
              <li key={stop._id}>{stop.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BusByRoutePage;
