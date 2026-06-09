import React, { useEffect, useState } from 'react'

const useOffer = () => {
    const [offerpost, setOfferPost] = useState([])
    useEffect(() => {
        
        fetch("offer.json")
            .then((res) => res.json())
        .then((data) => setOfferPost(data))

    },[])
    return {
      offerpost
  }
}

export default useOffer