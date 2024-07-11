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
        <div className="mt-10">
          <Button onClick={() => setOpenModal(true)}>Add new user</Button>
        </div>
        <AddFarmer />
        <FarmersList state={state} />
      </div>
    </>
  );
};

export default Farmers;
