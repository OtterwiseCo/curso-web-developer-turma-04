import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { listPosts } from "../services/posts";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");

  useEffect(() => {
    const request = async () => {
      const { data } = await listPosts(userId && `?userId=${userId}`);
      console.log(data);
      setPosts(data);
    };
    request();
  }, [userId]);

  return (
    <>
      <Link to="/">Voltar para home</Link>
      {posts.map((post) => (
        <>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
          <br />
        </>
      ))}
    </>
  );
};

export default Posts;
