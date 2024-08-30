import { FarmersList } from "../components";
import { farmersDummyData } from "../data/dummyData";
import { useAuth } from "../context/AuthContext";

const Farmers = () => {
  const { token } = useAuth();
  console.log("the token here", token);

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
  // console.log(farmersData);
  //connect to the api and get the farmers
  //handle errors
  // if(!response.ok){ return {isError:true, message:'Could not fetch famers'}}
};
