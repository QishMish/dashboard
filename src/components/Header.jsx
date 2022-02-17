import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import Profile from '../assets/profile.png';

function Header() {
  return (
    <header className='w-full h-20 px-4 flex items-center justify-between shadow-sm shadow-gray-300'>
      <div className='flex items-center'>
        <BiSearch className='w-10 text-3xl mr-4 text-gray-700 '/>
        <input type='text' placeholder='Search' className='outline-none	' />
      </div>
      <div className='flex items-center'>
        <IoMdNotificationsOutline className='w-10 text-3xl mr-4 text-gray-700 cursor-pointer' />
        <img src={Profile} alt='profile' className='w-12 cursor-pointer' />
      </div>
    </header>
  );
}

export default Header;
