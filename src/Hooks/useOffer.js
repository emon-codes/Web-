import React, { useEffect, useState } from 'react'

const useOffer = () => {

  const [offerpost, setoffer] = useState([])
  useEffect(() => {
    fetch("offer.json")
      .then((res) => res.json())
    .then((data) => setoffer(data))
  },[] )


  return {
    offerpost,
  }
}

export default useOffer