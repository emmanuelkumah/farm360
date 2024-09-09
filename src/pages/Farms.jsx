import { useLoaderData } from "react-router-dom";
import FarmsList from "../components/Farmers/FarmsList";
import { getAuthToken } from "../utils/auth";
import axios from "axios";

const Farms = () => {
  const listFarms = useLoaderData();
  console.log("farms", listFarms);
  return (
    <div className="m-10">
      <section>
        <FarmsList listFarms={listFarms} />
      </section>
    </div>
  );
};

export default Farms;

//should have async await if connecting to api

export const loader = async () => {
  const token = getAuthToken();

  const data = axios
    .get("https://dev.bjlfarmersmarket.net/farms", {
      headers: {
        "X-Origin": "WEB",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
      //console.log(response.data);
    })
    .catch((error) => console.log(error));
  return data;
};
