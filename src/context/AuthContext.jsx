import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const loginUser = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };
  const logoutUser = () => {
    setToken(null);
    localStorage.removeItem("token");
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
