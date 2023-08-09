import React from 'react';
import { Link } from 'react-router-dom';
// import { FaBeer } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="bg-gray-800 w-64  text-start">
      <div className='bg-gray-900 w-screen p-3 ' ><div className='ms-6 text-3xl'>
        {/* <Link to="/bus-search">Bus Search</Link> */}Bus Admin
      </div></div>
    <ul className="space-y-6 mt-10 ms-7">
      <li>
        <Link to="/bus-search">Bus Search</Link>
      </li>
      <li>
        <Link to="/create-bus">Create Bus</Link>
      </li>
      <li>
        <Link to="/get-bus">Get Bus</Link>
      </li>
      <li>
        <Link to="/update-bus">Update Bus</Link>
      </li>
      <li>
        <Link to="/delete-bus">Delete Bus</Link>
      </li>
      <li>
        <Link to="/list-buses">List Buses</Link>
      </li>
      <li>
        <Link to="/create-bus-stop">Create Bus Stop</Link>
      </li>
      <li>
        <Link to="/bus-stop-list">Bus Stop List</Link>
      </li>
      <li>
        <Link to="/bus-stop-details">Bus Stop Details</Link>
      </li>
      <li>
        <Link to="/update-bus-stop">Update Bus Stop</Link>
      </li>
      <li>
        <Link to="/delete-bus-stop">Delete Bus Stop</Link>
      </li>
    </ul>
  </div>
  
  );
}

export default Sidebar;