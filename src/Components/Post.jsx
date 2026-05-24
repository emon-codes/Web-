import React from "react";

import usePost from "../Hooks/usePost";

const Post = () => {
  const { post } = usePost();
  return (
    <div>
      {post.map((posts) => (
        <h1> {posts.title} </h1>
      ))}
    </div>
  );
};

export default Post;

