import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Form, useSubmit } from "react-router-dom";

const UserForm = () => {
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  //   const submit = useSubmit();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     if(password !== confirmPassword) {
  //         setError('Password do not match')
  //     }
  //     // const form = e.currentTarget.form;
  //     // const formData = new FormData(form);
  //     // console.log("data", formData.get("password"));
  //     // if (formData.get("fullName") === "" || formData.get("email") === "") {
  //     //   return;
  //     // }
  //     // submit(e.currentTarget.form);
  //     // e.currentTarget.form.reset();
  //   };
  return (
    <>
      <div className="bg-secondary w-full h-screen md:w-1/2 md:h-[50%] rounded-lg shadow-md container mx-auto">
        <section className="flex justify-center items-center">
          <Form className="mx-auto w-[80%]" method="post">
            <h2 className="border-l-4 border-main pl-2 my-4">User Details</h2>

            <div className="mb-2 block">
              <Label htmlFor="fullName" value="Full name" />
            </div>
            <TextInput
              id="fullName"
              type="text"
              placeholder="Full name"
              name="fullName"
              defaultValue=""
              required
            />
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="name@farmtrace.com"
                name="email"
                defaultValue=""
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                required
                value={password}
                onChange={handlePassword}
                name="password"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="confirm" value="Confirm your password" />
              </div>
              <TextInput
                id="confirm"
                type="password"
                required
                value={confirmPassword}
                onChange={handleConfirmPassword}
                name="confirmPassword"
              />
              <span>
                {password !== confirmPassword && "Password do not match"}
              </span>
            </div>

            <Button
              type="submit"
              className="w-full my-10 "
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </Button>
          </Form>
        </section>
      </div>
    </>
  );
};

export default UserForm;
