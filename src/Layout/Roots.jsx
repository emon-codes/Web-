import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Products from '../Pages/Products'
import Post from '../Components/Post'
import Comment from '../Components/Comment'

const Roots = () => {
  return (
      <div>
          <Navbar />
      <Outlet />
      <Products />
      <Post />
      <Comment/>
          <div>footer</div>


    </div>
  )
}

export default Roots