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
  const response = await axiosbaseURL.get("farms");
  console.log("server resonse", response);
  if (
    response.status === 401 ||
    response.status === 404 ||
    response.status === 500
  ) {
    throw json({ message: "Could not fetch farms." });
  }
  return response.data.data;
  // const token = getAuthToken();

  // const response = axios
  //   .get("https://dev.bjlfarmersmarket.net/farmers", {
  //     headers: {
  //       "X-Origin": "WEB",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //   .then((response) => {
  //     return response.data;
  //     //console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error.response);
  //     return error.response;
  //   });
  // if (response.status === 401) {
  //   throw json({ message: "Could not fetch farmers" });
  // }
  // return response;
};
