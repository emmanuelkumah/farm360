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

export const loader = async () => {
  const response = await axiosbaseURL.get("farmers");

  if (
    response.status === 401 ||
    response.status === 404 ||
    response.status === 500
  ) {
    throw json({ message: "Could not fetch farms." });
  }
  return response.data;
};
