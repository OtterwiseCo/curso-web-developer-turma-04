import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { listUsers } from "../services/users";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const request = async () => {
      const { data } = await listUsers();
      console.log(data);
      setUsers(data);
    };
    request();
  }, []);
  return (
    <>
      <Link to="/">Voltar para home</Link>
      <br />

      {users.map((user) => (
        <>
          <Link to={`/users/${user.id}`} key={user.id}>
            {user.name}
          </Link>
          <br />
        </>
      ))}
    </>
  );
};

export default Users;
