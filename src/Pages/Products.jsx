import React from 'react'
import useData from '../Hooks/useData'
import { IoStarHalfOutline } from 'react-icons/io5'

const Products = () => {
 const {products} = useData()
  return (
    <div className='flex gap-4 flex-wrap justify-center items-center'>
      {products.map((product) => (<div>

        <div >

          <div><img className='w-70   border-4 border-green-500' src={product.image} alt="" /></div>
          <div>
            
            <h5>{ product.category }</h5>
            <h3>{product.name}</h3>
            <h3> price {product.price}</h3>


            <span className='flex gap-2 text-yellow-400'>
              <IoStarHalfOutline />
              <IoStarHalfOutline />
              <IoStarHalfOutline />
              <IoStarHalfOutline />
              <IoStarHalfOutline />
              
            
            
            
            </span>



          </div>


        </div>

      </div> )  )}
    </div>
  )
}

export default Products