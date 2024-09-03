import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);
import { getAuthToken } from "../utils/auth";
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(getAuthToken());

  const loginUser = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };
  const logoutUser = () => {
    setToken(null);
    localStorage.removeItem("token");
    console.log("user logged out");
  };
  return (
    <div>
      <AuthContext.Provider value={{ token, loginUser, logoutUser }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
