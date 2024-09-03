import { FarmersList } from "../components";
import { farmersDummyData } from "../data/dummyData";
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
  return farmersDummyData;
};
