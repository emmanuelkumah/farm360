import { redirect } from "react-router-dom";
import { LoginForm } from "../components";
import { axiosbaseURL } from "../api/axios";

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
  try {
    const rawResponse = await fetch("http://18.134.98.183:8080/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Origin": "WEB",
      },
      body: JSON.stringify(loginDetails),
    });
    const content = await rawResponse.json();
    console.log(content);
    // const response = await axiosbaseURL.post("/auth/login", loginDetails, {
    //   headers: {
    //     "X-Origin": "WEB",
    //   },
    // });
  } catch (error) {
    console.log(error);
  }

  return redirect("/login");
};
