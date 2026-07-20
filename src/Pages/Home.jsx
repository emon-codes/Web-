import React from 'react'
import Navbar from '../Components/Navbar'
import Products from './Products'
import PopularProducts from './Home component/PopularProducts'
import Offer from './Offer'

const Home = () => {
  return (
      <div>
           <Products />
      <PopularProducts />
          <Offer/>
    </div>
  )
}

export default Home