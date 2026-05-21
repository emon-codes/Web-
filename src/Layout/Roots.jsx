import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Products from '../Pages/Products'

const Roots = () => {
  return (
      <div>
          <Navbar />
      <Outlet />
      <Products/>
          <div>footer</div>


    </div>
  )
}

export default Roots