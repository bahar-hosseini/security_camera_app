import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState("");

  const login = (email, password) => {
    axios
      .post("/api/users/login", {
        email,
        password,
      })
      .then((response) => {
        setIsLoggedIn(true);
        navigate("/videos");
      })
      .catch((error) => {
        setIsError(error);
      });
  };

  const logout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const value = { isLoggedIn, login, logout, isError,setIsError };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
