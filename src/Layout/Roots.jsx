import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Products from '../Pages/Products'
import Post from '../Components/Post'
import Comment from '../Components/Comment'
import Offer from '../Pages/Offer'

const Roots = () => {
  return (
      <div>
          <Navbar />
      <Outlet />
      <Products />
    <Offer/>
          <div>footer</div>


    </div>
  )
}

export default Roots