import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl mt-5 px-5 py-5 text-slate-500">Home</h1>
      <h1 className="text-3xl mt-5 px-5 py-5 text-slate-500">Nested Routing</h1>

      <NavLink to='/homeone'>Home One</NavLink>
      <hr />
      <NavLink to='/hometwo'>Home Two</NavLink>

    </div>
  )
}

export default Home
