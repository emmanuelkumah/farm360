import { AddFarmer } from "../components";
import { useFarmersContext } from "../context/FarmersProvider";

const Farmers = () => {
  const { state } = useFarmersContext();
  console.log(state);
  return (
    <div>
      <AddFarmer />
    </div>
  );
};

export default Farmers;
