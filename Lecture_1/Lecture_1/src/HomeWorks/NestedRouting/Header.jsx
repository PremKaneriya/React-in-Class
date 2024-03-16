import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <h1>Header</h1>

    <div className="fixed top-0 w-full z-10 cursor-pointer flex items-center h-24 justify-between px-8 bg-white shadow-xl">
    <h1 className="text-3xl mt-5 px-5 py-5 text-red-500"><NavLink to='/'>Home</NavLink></h1>
      <h1 className="text-3xl mt-5 px-5 py-5 text-red-500"><NavLink to='/faq'>Faq</NavLink>      </h1>  
      <h1 className="text-3xl mt-5 px-5 py-5 text-red-500"><NavLink to='/team' >Team</NavLink></h1>   

    </div>

        </>
  )
}

export default Header
