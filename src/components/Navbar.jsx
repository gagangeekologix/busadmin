// src/Navbar.js

import React from 'react';
import { FaRegUser } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4   text-white  h-18">
    <ul className="flex space-x-4 text-center  justify-between">
      <li className='ms-6 text-3xl'>
        
      </li>
      <li>
        {/* <Link to="/create-bus">Create Bus</Link> */}
        {/* <svg class="stroke-1 max-h-6"></svg> */}
        <div className=" text-3xl me-10">

        <FaRegUser/>
        </div>
      </li>
      
    </ul>
  </nav>
  
  );
}

export default Navbar;
