import React, { useEffect, useState } from "react";

const usePost = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("post.json")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return {
    post,
  };
};

export default usePost;
