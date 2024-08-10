// import { Button } from "flowbite-react";
import { FarmersList } from "../components";
// import { farmersData } from "../data/dummyData";
import { farmersData } from "../data/dummyData";

const Farmers = () => {
  return (
    <>
      <h2>farmers data will show here</h2>
      <div className="m-10">
        <input
          className="w-1/2 rounded-lg"
          type="text"
          name="search"
          id=""
          placeholder="Search"
        />

        <FarmersList />
      </div>
    </>
  );
};

export default Farmers;

//should be async await if connect to api
export const loader = () => {
  return farmersData;
  //connect to the api and get the farmers
};
