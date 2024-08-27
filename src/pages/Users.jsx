import { UserForm, UsersList } from "../components";

import { usersDummyData } from "../data/dummyData";
const Users = () => {
  return (
    <>
      <section className="container mx-auto">
        {/* <UserForm /> */}
        <UsersList />
      </section>
    </>
  );
};

export default Users;

export const loader = async () => {
  return usersDummyData;
};

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
