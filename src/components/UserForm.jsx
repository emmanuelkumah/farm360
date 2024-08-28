import { Button, Label, TextInput } from "flowbite-react";
import { Form } from "react-router-dom";

const UserForm = () => {
  return (
    <>
      <div className="bg-secondary w-full h-screen md:w-1/2 md:h-[50%] rounded-lg shadow-md container mx-auto">
        <section className="flex flex-col justify-center items-center">
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
                placeholder="name@flowbite.com"
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
                defaultValue=""
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
                defaultValue=""
                name="confirmPassword"
              />
            </div>

            <Button type="submit" className="w-full my-10 ">
              Submit
            </Button>
          </Form>
        </section>
      </div>
    </>
  );
};

export default UserForm;
