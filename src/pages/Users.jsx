import { UsersList } from "../components";
import { axiosbaseURL } from "../api/axios";
import { useLoaderData } from "react-router-dom";
const Users = () => {
  const { data } = useLoaderData();
  console.log("users", data);
  return (
    <>
      <section className="m-10">
        <UsersList data={data} />
      </section>
    </>
  );
};

export default Users;

export const loader = async () => {
  const response = await axiosbaseURL.get("/users");
  return response;
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
