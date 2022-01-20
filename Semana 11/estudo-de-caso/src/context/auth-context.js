import { createContext, useContext, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";

import { authProvider } from "../providers/auth";

const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const userStored = localStorage.getItem("user");
  const [user, setUser] = useState(userStored ? JSON.parse(userStored) : null);

  const login = (data, callback) => {
    authProvider.signin(data, (user) => {
      setUser(user);
      callback();
    });
  };

  const logout = (callback) => {
    authProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  return <AuthContext.Provider value={{ user, login, logout }} {...props} />;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user?.token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
