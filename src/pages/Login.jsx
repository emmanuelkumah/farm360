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

  const response = await axios.post(
    "http://18.134.98.183:8080/auth/login",
    loginDetails,
    {
      headers: {
        "X-Origin": "WEB",
      },
    }
  );
  console.log(response);

  if (response.status === 200) {
    const token = response.data.token;
    localStorage.setItem("token", token);
    return redirect("/app");
  }
  // try {
  //   const response = await axios.post(
  //     "http://18.134.98.183:8080/auth/login",
  //     loginDetails,
  //     {
  //       headers: {
  //         "X-Origin": "WEB",
  //       },
  //     }
  //   );
  //   console.log(response);
  //   const token = response.data.token;
  //   console.log(token);
  // } catch (error) {
  //   console.log(error);
  // }

  // if (response.status === 200) {
  //   localStorage.setItem("token", token);
  //   return redirect("/app");
  // }
  // redirect null
};
