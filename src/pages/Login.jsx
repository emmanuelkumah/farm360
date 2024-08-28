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
    const response = await axiosbaseURL.post("/auth/login", loginDetails, {
      headers: {
        "X-Origin": "WEB",
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }

  // const response = await axios.post(
  //   "http://18.134.98.183:8080/auth/login",
  //   loginDetails,
  //   {
  //     headers: {
  //       "X-Origin": "WEB",
  //     },
  //   }
  // );
  // console.log(response);

  // if (response.status === 200) {
  //   const token = response.data.token;
  //   localStorage.setItem("token", token);
  //   return redirect("/app");
  // }
  return redirect();
};
