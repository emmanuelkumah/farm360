import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import axios from "axios";
import loginFarm from "../assets/images/loginFarm.jpg";
// import { useAuthContext } from "../context/AuthProvider";
import { Form, Link } from "react-router-dom";

const LoginForm = () => {
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
            <Form
              className="flex max-w-2xl flex-col gap-4 text-xl"
              method="post"
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="username" value="Your email" />
                </div>
                <TextInput
                  id="username"
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  defaultValue=""
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
                  defaultValue=""
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>

              <Button type="submit" className="bg-[#357960]">
                Login to app
                {/* <Link to="/app">Login</Link> */}
              </Button>
            </Form>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoginForm;

export const action = async ({ request }) => {
  const data = await request.formData();
  const loginDetails = {
    email: data.get("email"),
    password: data.get("password"),
  };
  console.log(loginDetails);
  try {
    const response = await axios.post(
      "http://18.134.98.183:8080/auth/login",
      loginDetails,
      {
        headers: {
          "X-Origin": "WEB",
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      // The server responded with a status code outside the 2xx range
      console.log("Error response:", error.response);
    } else if (error.request) {
      // The request was made but no response was received
      console.log("Error request:", error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.log("Error message:", error.message);
    }
  }
  return null;
};
