import React from 'react';
import { FaBusAlt, FaRegListAlt, FaSearch } from 'react-icons/fa';
import { BiEdit } from 'react-icons/bi';
import { TbBusStop } from 'react-icons/tb';
import { RiDeleteBin2Line } from 'react-icons/ri';

import { Link } from 'react-router-dom';
// import { FaBeer } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="bg-gray-800 w-64 text-start">
      <div className='bg-gray-900 w-screen p-3 h-[62px]' ><div className='ms-6 text-3xl'>
        {/* <Link to="/bus-search">Bus Search</Link> */}Bus Admin
      </div></div>
    <ul className="space-y-6 flex items-start flex-col whitespace-nowrap ps-10 mt-10 ms-7">
      <li className=' flex justify-evenly'>
      <FaSearch/><Link className="ms-3" to="/bus-search">Bus Search</Link>
      </li>
      <li className=' flex justify-evenly'>
      <FaBusAlt/><Link className="ms-3" to="/create-bus">Create Bus</Link>
      </li>
      <li className=' flex justify-evenly'>
      <FaRegListAlt/><Link className="ms-3" to="/list-buses">List Buses</Link>
      </li>
      <li className=' flex justify-evenly'>
      <FaSearch/> <Link className="ms-3"k to="/get-bus">Get Bus</Link>
      </li>
      <li className=' flex justify-evenly'>
      <BiEdit/><Link className="ms-3" to="/update-bus">Update Bus</Link>
      </li>
      <li className=' flex justify-evenly'>
      <RiDeleteBin2Line/><Link className="ms-3" to="/delete-bus">Delete Bus</Link>
      </li>
      
      <li className=' flex justify-evenly'>
      <TbBusStop/><Link className="ms-3" to="/create-bus-stop">Create Bus Stop</Link>
      </li>
      <li className=' flex justify-evenly'>
      <FaRegListAlt/><Link className="ms-3" to="/bus-stop-list">Bus Stop List</Link>
      </li>
      <li className=' flex justify-evenly'> 
      <FaSearch/><Link className="ms-3" to="/bus-stop-details">Bus Stop Details</Link>
      </li>
      <li className=' flex justify-evenly'>
      <BiEdit/><Link className="ms-3" to="/update-bus-stop">Update Bus Stop</Link>
      </li>
      <li className=' flex justify-evenly'>
        <RiDeleteBin2Line/><Link className="ms-3" to="/delete-bus-stop">Delete Bus Stop</Link>
      </li>
    </ul>
  </div>
  
  );
}

export default Sidebar;