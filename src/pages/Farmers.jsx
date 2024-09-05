import { FarmersList } from "../components";
import { farmersDummyData } from "../data/dummyData";
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

  axios
    .get("https://dev.bjlfarmersmarket.net/farmers", {
      headers: {
        "X-Origin": "WEB",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.log(error));
  return farmersDummyData;
};
