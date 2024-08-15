import FarmsList from "../components/Farmers/FarmsList";
import { farmsData } from "../data/dummyData";
const Farms = () => {
  return (
    <div className="m-10">
      <section>
        <FarmsList />
      </section>
    </div>
  );
};

export default Farms;

//should have async await if connecting to api

export const loader = () => {
  //use try catch and handle errors
  // response = await axios.get()
  //if(!response.ok) return {isError: true, message:"Could not load farm"}
  return farmsData;
};
