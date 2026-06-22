import React from 'react'
import useData from '../Hooks/useData'

const Products = () => {
 const {products} = useData()
  return (
    <div>
      {products.map((product) => (<h1>{ product.name}</h1> )  )}
    </div>
  )
}

export default Products