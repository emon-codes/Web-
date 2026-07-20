import React from 'react'
import useOffer from '../Hooks/useOffer'

const Offer = () => {
const {offerpost} = useOffer()


  return (
    <div>
     { offerpost.map((offer) => (<h1> key={ Offer.id }</h1>) )}




    </div>
  )
}

export default Offer