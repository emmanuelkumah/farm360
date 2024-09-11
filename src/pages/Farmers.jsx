import { FarmersList } from "../components";
import { json } from "react-router-dom";
import { getAuthToken } from "../utils/auth";
import axios from "axios";
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
  const token = getAuthToken();

  const response = axios
    .get("https://dev.bjlfarmersmarket.net/farmers", {
      headers: {
        "X-Origin": "WEB",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
      //console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });
  if (response.status === 401) {
    throw json({ message: "Could not fetch farmers" });
  }
  return response;
};
