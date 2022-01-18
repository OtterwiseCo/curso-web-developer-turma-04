import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getUser } from "../services/users";

const Users = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const request = async () => {
      const { data } = await getUser(id);
      console.log(data);
      setUser(data);
    };
    request();
  }, [id]);

  return (
    <>
      <Link to="/">Voltar para home</Link>
      <br />

      {user?.name}
    </>
  );
};

export default Users;
