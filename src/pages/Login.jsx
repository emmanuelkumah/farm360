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

  // if (response.status === 422 || response.status === 401) {
  //   return response;
  // }

  // if (!response.ok) {
  //   throw json({ message: "Could not authenticate user." }, { status: 500 });
  // }
  if (response.status === 200) {
    const token = response.data.token;
    localStorage.setItem("token", token);
    return redirect("/app");
    // console.log("yes we have", token);
  }

  // if (response.status === 200) {
  //   const token = response.data.token;
  //   localStorage.setItem("token", token);
  //   return redirect("/app");
  // } else if (
  //   response.status === 422 ||
  //   response.status === 401 ||
  //   response.status === 500
  // ) {
  //   return response;
  // } else {
  //   throw json({ message: "Could not authenticate user" }, { status: 500 });
  // }
};
