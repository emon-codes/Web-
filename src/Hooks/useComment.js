import React, { useEffect, useState } from 'react'

const useComment = () => {
  const [comment, setcomment] = useState([])
  useEffect(() => {
    fetch("comment.json")
      .then((res) => res.json())
    .then((data) => setcomment(data))
    
  },[])
  return {
    comment
  }
}

export default useComment

