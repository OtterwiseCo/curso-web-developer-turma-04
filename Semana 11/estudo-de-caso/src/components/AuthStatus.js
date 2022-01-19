import React from "react";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();
  console.log(auth.user);

  if (!auth.user) {
    return <p>Você não está logado</p>;
  }
  return (
    <p>
      Bem vindo {auth.user.name}!
      <button
        onClick={() => {
          auth.logout(() => navigate("/"));
        }}
      >
        Sair
      </button>
    </p>
  );
}

export default AuthStatus;
