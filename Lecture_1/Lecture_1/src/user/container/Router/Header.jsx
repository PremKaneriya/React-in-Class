import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='cursor-pointer py-4 px-5 text-white flex items-center bg-white'>
      <NavLink to='/' className='text-black'>Home</NavLink>
      <NavLink to='/contact' className='text-black'>Contact</NavLink>
      <NavLink to='/about' className='text-black'>About</NavLink>
    </nav>
  );
};

export default Header;
