import { UsersList } from "../components";
import { axiosbaseURL } from "../api/axios";
import { usersDummyData } from "../data/dummyData";
const Users = () => {
  return (
    <>
      <section className="m-10">
        <UsersList />
      </section>
    </>
  );
};

export default Users;

export const loader = async () => {
  const response = await axiosbaseURL.get("/users");
  console.log(response);
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
