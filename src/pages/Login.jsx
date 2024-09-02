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

  const response = await axios.post("api/auth/login", loginDetails, {
    headers: {
      "X-Origin": "WEB",
    },
  });
  console.log(response.status);
  if (response.status !== 200) {
    return response;
  }

  localStorage.setItem("token", response.data.token);
  return redirect("/app");
};
