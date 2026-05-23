import React, { useEffect, useState } from 'react'

const praktis = () => {

    const [pono, setpono] = useState([]);
    useEffect(() => {
        fetch("post.json")
        .then((res) => res.json())
        .then((data) => setpono(data));
    },[])



  return (
    pono
  )
}

export default praktis