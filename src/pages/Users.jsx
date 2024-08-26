import { UserForm } from "../components";

const Users = () => {
  return (
    <>
      <UserForm />
    </>
  );
};

export default Users;

export const action = async ({ request }) => {
  const data = await request.formData();
  const userDetails = {
    fullName: data.get("fullName"),
    email: data.get("email"),
    password: data.get("password"),
    confirmPassword: data.get("confirmPassword"),
  };
  console.log(userDetails);
  return null;
};
