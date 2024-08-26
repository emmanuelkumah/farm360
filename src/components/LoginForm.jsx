import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import loginFarm from "../assets/images/loginFarm.jpg";
import { Form, useNavigation, useActionData } from "react-router-dom";

const LoginForm = () => {
  const data = useActionData();
  console.log(data);
  // const navigation = useNavigation();
  // const isSubmitting = navigation.state === "submitting";

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

              <Button
                type="submit"
                // disabled={isSubmitting}
                className="bg-[#357960]"
              >
                {/* {isSubmitting ? "Submitting..." : "Login"} */}
                login
              </Button>
            </Form>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoginForm;
