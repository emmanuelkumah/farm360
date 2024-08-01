import { Button } from "flowbite-react";
import { FarmersList } from "../components";
import { useFarmersContext } from "../context/FarmersProvider";
import { Link } from "react-router-dom";

const Farmers = () => {
  const { state } = useFarmersContext();
  return (
    <>
      <div className="m-10">
        <input
          className="w-1/2 rounded-lg"
          type="text"
          name="search"
          id=""
          placeholder="Search"
        />

        {state.farmers.length >= 1 ? (
          <FarmersList />
        ) : (
          <h3 className="text-xl my-6">
            No farmer added. Click on the "Add new farmer" to start adding
            farmer
          </h3>
        )}
      </div>
    </>
  );
};

export default Farmers;
