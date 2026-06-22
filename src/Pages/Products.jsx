import React from 'react'
import useData from '../Hooks/useData'

const Products = () => {
 const {products} = useData()
  return (
    <div className='flex gap-4 flex-wrap justify-center items-center'>
      {products.map((product) => (<div>

        <div >

          <img className='w-70   border-4 border-green-500' src={product.image} alt="" />



        </div>

      </div> )  )}
    </div>
  )
}

export default Products