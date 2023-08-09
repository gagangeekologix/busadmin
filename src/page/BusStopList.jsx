// src/BusStopList.js

import React, { useState, useEffect } from 'react';
import { listBusStops } from '../api';
import { Link } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';
import { MdOutlineDeleteForever } from 'react-icons/md';

function BusStopList() {
  const [busStops, setBusStops] = useState([]);

  useEffect(() => {
    fetchBusStops();
  }, []);

  const fetchBusStops = async () => {
    try {
      const response = await listBusStops();
      setBusStops(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
  <h2 className='mb-10 text-3xl'>List Bus Stops</h2>
  <table className='w-3/6 border-collapse'>
    <thead>
      <tr className='border'>
        <th className='border py-2 px-4 text-left'>S.N.</th>
        <th className='border py-2 px-4 text-left'>Stops Name</th>
        <th className='border py-2 px-4 text-left'>Actions</th>
      </tr>
    </thead>
    <tbody>
      {busStops.map((busStop, index) => (
        <tr className='border' key={busStop._id}>
          <td className='border py-2 px-4'>{index + 1}</td>
          <td className='border py-2 px-4'>{busStop.name}</td>
          <td className='border py-2 px-4'>
              <button className='px-3 rounded-md shadow-amber-50 hover:text-blue-600'>
                <Link to={`/update-bus/${busStop._id}`}>
                  <FaRegEdit />
                </Link>
              </button>
              <button className='px-3 rounded-md shadow-amber-50 hover:text-red-600'>
                <Link to={`/delete-bus/${busStop._id}`}>
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

export default BusStopList;
