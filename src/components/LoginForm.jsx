import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import axios from "axios";
import loginFarm from "../assets/images/loginFarm.jpg";
import {
  Form,
  redirect,
  json,
  useActionData,
  useNavigation,
} from "react-router-dom";

const LoginForm = () => {
  const data = useActionData();
  console.log(data);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

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
            {data && data.errors && (
              <ul>
                {Object.values(data.errors).map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            )}
            {data && data.message && <p>{data.message}</p>}

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
                {data && data.message && <p>{data.message}</p>}
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

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#357960]"
              >
                {isSubmitting ? "Submitting..." : "Login"}
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

  const response = await axios.post(
    "http://18.134.98.183:8080/auth/login",
    loginDetails,
    {
      headers: {
        "X-Origin": "WEB",
      },
    }
  );
  if (response.status === 200) {
    const token = response.data.token;
    localStorage.setItem("token", token);
    return redirect("/app");
  }
  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Could not authenticate user" }, { status: 500 });
  }
};
