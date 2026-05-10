import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'

const Roots = () => {
  return (
      <div>
          <Navbar />
          <Outlet />
          <div>footer</div>


    </div>
  )
}

export default Roots