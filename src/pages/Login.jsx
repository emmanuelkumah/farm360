import React, { useState } from "react";
// import axios from "../api/axios";
// import loginFarm from "../assets/images/loginFarm.jpg";
import { LoginForm } from "../components";

// const LOGIN_URL = "/user";
const Login = () => {
  // const [message, setMessage] = useState({
  //   success: "",
  //   error: "",
  // });

  // const handleLoginSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       LOGIN_URL,
  //       JSON.stringify(loginDetails),
  //       {
  //         headers: { "Content-Type": "application/json" },
  //       }
  //     );
  //     setAuth({ username, password });
  //     setLoginDetails({
  //       username: "",
  //       password: "",
  //     });
  //     setMessage({ ...message, success: "Login successful" });
  //     navigate("/app/dashboard");
  //   } catch (error) {
  //     if (!error.response) {
  //       setMessage({ ...message, error: "No server response" });
  //     } else if (error.response?.status === 400) {
  //       setMessage({ ...message, error: "Missing username or password" });
  //     } else if (error.response?.status === 401) {
  //       setMessage({ ...message, error: "Unauthorized" });
  //     } else {
  //       setMessage({ ...message, error: "Login failed" });
  //     }
  //   }
  // };
  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
