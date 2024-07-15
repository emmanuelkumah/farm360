import { Button } from "flowbite-react";
import { AddFarmer, FarmersList } from "../components";
import { useFarmersContext } from "../context/FarmersProvider";
import { useStateContext } from "../context/ContextProvider";

const Farmers = () => {
  const { setOpenModal } = useStateContext();
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
        <div className="my-10">
          <Button onClick={() => setOpenModal(true)}>Add new farmer</Button>
        </div>
        <AddFarmer />

        {state.farmers.length >= 1 ? (
          <FarmersList state={state} />
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
