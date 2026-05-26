import React, { useEffect } from 'react'

const useComment = () => {
  const [comment, setComment] = useState([])
  useEffect(() => { 
    fetch("comment.json")
      .then((res) => res.json())
      .then((data) => setComment(data));

  }, [])
  return {
    comment
  }
}

export default useComment