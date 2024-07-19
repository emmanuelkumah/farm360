import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import axios from "../api/axios";
import { useAuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const { setAuth } = useAuthContext();

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
      <section className="h-screen flex flex-col md:flex-row justify-center   items-center ">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
          />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <h3 className="text-2xl my-5">Login to the app </h3>
          <form
            className="flex max-w-2xl flex-col gap-4"
            onSubmit={handleLoginSubmit}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Your username" />
              </div>
              <TextInput
                id="username"
                type="text"
                placeholder="Enter your username"
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
            <Button type="submit">Submit</Button>
          </form>
          {message.error}
        </div>
      </section>
    </>
  );
};

export default Login;
