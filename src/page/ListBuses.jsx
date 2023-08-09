// src/ListBuses.js

import React, { useState, useEffect } from 'react';
import { listBuses } from '../api';
import { FaRegEdit } from 'react-icons/fa';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';

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
    <table className='w-3/6 border-collapse'>
      <thead>
        <tr className='border'>
          <th className='border py-2 px-4 text-left'>S.N.</th>
          <th className='border py-2 px-4 text-left'>Bus Name</th>
          <th className='border py-2 px-4 text-left'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {buses.map((bus, index) => (
          <tr className='border' key={bus._id}>
            <td className='border py-2 px-4'>{index + 1}</td>
            <td className='border py-2 px-4'>{bus.name}</td>
            <td colSpan={1} className='border py-2 px-4'>
              <button className='px-3 rounded-md shadow-amber-50 hover:text-blue-600'>
                <Link to={`/update-bus/${bus._id}`}>
                  <FaRegEdit />
                </Link>
              </button>
              <button className='px-3 rounded-md shadow-amber-50 hover:text-red-600'>
                <Link to={`/delete-bus/${bus._id}`}>
                  <MdOutlineDeleteForever />
                </Link>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  

  );
}

export default ListBuses;
