import { FarmersList } from "../components";
import { json } from "react-router-dom";
import { axiosbaseURL } from "../api/axios";
const Farmers = () => {
  return (
    <>
      <div className="m-10">
        <FarmersList />
      </div>
    </>
  );
};

export default Farmers;

//should be async await if connect to api
export const loader = async () => {
  const response = await axiosbaseURL.get("farmers");
  console.log("server resonse", response);
  if (
    response.status === 401 ||
    response.status === 404 ||
    response.status === 500
  ) {
    throw json({ message: "Could not fetch farms." });
  }
  return response.data;
};
