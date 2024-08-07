import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import axios from "../api/axios";
import loginFarm from "../assets/images/loginFarm.jpg";
// import { useAuthContext } from "../context/AuthProvider";
// import { useNavigate } from "react-router-dom";

const LOGIN_URL = "/user";
const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState({
    success: "",
    error: "",
  });
  // const navigate = useNavigate();
  // const { setAuth } = useAuthContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify(loginDetails),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setAuth({ username, password });
      setLoginDetails({
        username: "",
        password: "",
      });
      setMessage({ ...message, success: "Login successful" });
      navigate("/app/dashboard");
    } catch (error) {
      if (!error.response) {
        setMessage({ ...message, error: "No server response" });
      } else if (error.response?.status === 400) {
        setMessage({ ...message, error: "Missing username or password" });
      } else if (error.response?.status === 401) {
        setMessage({ ...message, error: "Unauthorized" });
      } else {
        setMessage({ ...message, error: "Login failed" });
      }
    }
  };
  return (
    <>
      <div className="bg-[#E6F0DC]">
        <section className=" container mx-auto h-screen flex flex-col md:flex-row md:gap-10 justify-center items-center">
          <div className="w-1/2">
            <img
              src={loginFarm}
              alt="Sample image"
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className="w-1/2">
            <h3 className="text-2xl my-5">Login to the app </h3>
            <form
              className="flex max-w-2xl flex-col gap-4 text-xl"
              onSubmit={handleLoginSubmit}
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="username" value="Your email" />
                </div>
                <TextInput
                  id="username"
                  type="text"
                  placeholder="Enter your email"
                  name="username"
                  value={loginDetails.username}
                  onChange={(e) => handleInputChange(e)}
                  required
                  autoFocus
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput
                  id="password"
                  type="password"
                  name="password"
                  value={loginDetails.password}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <Button type="submit" className="bg-[#357960]">
                Login
              </Button>
            </form>
            {message.error}
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
