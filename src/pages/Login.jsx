import { redirect, useActionData } from "react-router-dom";
import { LoginForm } from "../components";
import axios from "axios";
const Login = () => {
  const data = useActionData();
  return (
    <>
      <LoginForm data={data} />
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

  try {
    const response = await axios.post(
      "https://dev.bjlfarmersmarket.net/auth/login",
      loginDetails,
      {
        headers: {
          "X-Origin": "WEB",
        },
      }
    );
    console.log("right creds", response);

    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      return redirect("/app");
    }
  } catch (error) {
    return error.response;
  }
};
