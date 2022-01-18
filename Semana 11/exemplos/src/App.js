import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./routes/Home";
import Users from "./routes/Users";
import User from "./routes/User";
import Posts from "./routes/Posts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" exact element={<Users />}></Route>
        <Route path="users/:id" element={<User />} />
        <Route path="posts" element={<Posts />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Página não encontrada</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
