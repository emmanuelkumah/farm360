import { redirect } from "react-router-dom";
import { LoginForm } from "../components";
import axios from "axios";

const Login = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;

export const action = async ({ request }) => {
  const data = await request.formData();
  const loginDetails = {
    email: data.get("email"),
    password: data.get("password"),
  };
  //connect to api and send request
  try {
    const response = await axios.post("api/auth/login", loginDetails, {
      headers: {
        "X-Origin": "WEB",
      },
    });
    console.log(response.data);
    localStorage.setItem("token", response.data.token);
    return redirect("/app");
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return { error: error.response.data.message || "Login failed" };
    } else if (error.request) {
      // The request was made but no response was received
      return { error: "No response from server" };
    } else {
      // Something happened in setting up the request that triggered an Error
      return { error: "Error setting up the request" };
    }
  }
};
