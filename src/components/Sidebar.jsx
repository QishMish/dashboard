/** @format */

import React from 'react';
import AdminIcon from '../assets/adminIcon.png';
import { BiCameraHome } from 'react-icons/bi';
import { BsShop } from 'react-icons/bs';
import { BiBookContent } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FiLogOut } from 'react-icons/fi';

function Sidebar() {
  return (
    <div className=' h-screen w-80 sm:w-96 bg-gray-800'>
      <nav className='h-20 flex px-4 items-center cursor-pointer'>
        <img src={AdminIcon} alt='Admin Icon' className='w-12 mr-4' />
        <h2 className='text-2xl font-bold text-white tracking-normal'>
          DashBoard
        </h2>
      </nav>
      <ul className='flex flex-col mt-4 p-2 justify-center w-full '>
        <li className='flex items-center my-2 p-2 rounded text-white cursor-pointer hover:bg-gray-900'>
          <BiCameraHome className='mr-2 text-xl' />
          <a className='text-lg font-semibold'>Dashboard</a>
        </li>
        <li className='flex items-center my-2 p-2 text-white rounded cursor-pointer hover:bg-gray-900'>
          <BsShop className='mr-2 text-xl' />
          <a className='text-lg font-semibold'>Products</a>
        </li>
        <li className='flex items-center my-2 p-2 text-white rounded cursor-pointer hover:bg-gray-900'>
          <BiBookContent className='mr-2 text-xl' />
          <a className='text-lg font-semibold'>Blog</a>
        </li>
        <li className='flex items-center my-2 p-2 text-white rounded cursor-pointer hover:bg-gray-900'>
          <CgProfile className='mr-2 text-xl' />
          <a className='text-lg font-semibold'>Profile</a>
        </li>
        <li className='flex items-center my-2 p-2 text-white rounded cursor-pointer hover:bg-gray-900'>
          <FiLogOut className='mr-2 text-xl' />
          <a className='text-lg font-semibold'>Log Out</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
