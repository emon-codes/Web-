import React from 'react'
import useOffer from '../Hooks/useOffer'

const Offer = () => {
    const {offerpost} = useOffer()
  return (
      <div>
          {offerpost.map((offer) => (<div>{ offer.name }</div>))}



    </div>
  )
}

export default Offer