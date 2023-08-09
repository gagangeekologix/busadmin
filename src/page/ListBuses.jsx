// src/ListBuses.js

import React, { useState, useEffect } from 'react';
import { listBuses } from '../api';

function ListBuses() {
  const [buses, setBuses] = useState([]);
  console.log(buses);
  useEffect(() => {
    fetchBuses();
  }, []);

  const fetchBuses = async () => {
    try {
      const response = await listBuses();
      // const busesWithRouteNames = await populateRouteNames(response);
      setBuses(response);
    } catch (error) {
      console.error(error);
    }
  };

  // const populateRouteNames = async (buses) => {
  //   const busStopsIds = buses.reduce((ids, bus) => ids.concat(bus.route), []);
  //   console.log('busStopsIds:', busStopsIds);
  
  //   const uniqueBusStopsIds = Array.from(new Set(busStopsIds)); // Remove duplicates
  //   console.log('uniqueBusStopsIds:', uniqueBusStopsIds);
  
  //   const busStopsMap = await getBusStopsByIds(uniqueBusStopsIds);
  //   console.log('busStopsMap:', busStopsMap);
  
  //   const busesWithRouteNames = buses.map((bus) => ({
  //     ...bus,
  //     routeNames: bus.route.map((stopId) => busStopsMap[stopId].name),
  //   }));
  //   console.log('busesWithRouteNames:', busesWithRouteNames);
  
  //   return busesWithRouteNames;
  // };

  return (
    <div>
      <h2 className='mb-10 text-3xl'>List Buses</h2>
      <ul>
        {buses.map((bus) => (
          <div className=' bg-slate-500 border text-2xl'>
          <li className=' me-5' key={bus._id}>
           Bus Name:<span className='ms-5'>{bus.name}</span> 
             {/* Route: {bus.routeNames.join(', ')} */}
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ListBuses;
