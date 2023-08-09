import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className='flex h-screen text-white bg-gray-700'>
      <div className='bg-gray-800 w-2/4 flex-none text-2xl lg:w-1/3 xl:w-1/5'>
        <Sidebar />
      </div>
      <div className='flex-grow bg-gray-700'>
        <Navbar />
        <div className=' ms-10 mt-10'>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
