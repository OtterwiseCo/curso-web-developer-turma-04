import { Link } from "react-router-dom";

const Home = () => {
  const login = () => {
    localStorage.setItem(
      "token",
      "aioshdiahuid1u38918ghd9as89d8918903281h89ia",
    );
  };

  console.log(localStorage.getItem("token"));

  return (
    <>
      <Link to="/users">Users</Link>
      <br />
      <Link to="/posts">Posts</Link>
      <br />
      <button onClick={login}>Me logar</button>
    </>
  );
};

export default Home;
