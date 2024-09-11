import { useLoaderData, json } from "react-router-dom";
import FarmsList from "../components/Farmers/FarmsList";
import { axiosbaseURL } from "../api/axios";

const Farms = () => {
  const listFarms = useLoaderData();
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
  const response = await axiosbaseURL.get("farms");
  console.log("server resonse", response);
  if (
    response.status === 401 ||
    response.status === 404 ||
    response.status === 500
  ) {
    throw json({ message: "Could not fetch farmers." });
  }
  return response.data.data;
};
