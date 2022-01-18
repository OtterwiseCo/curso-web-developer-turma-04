import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link to="/users">Users</Link>
      <br />
      <Link to="/posts">Posts</Link>
    </>
  );
};

export default Home;
