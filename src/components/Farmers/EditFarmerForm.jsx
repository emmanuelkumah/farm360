import FarmerForm from "./FarmerForm";
import { useRouteLoaderData } from "react-router-dom";
const EditFarmerForm = () => {
  const farmer = useRouteLoaderData("farmer-detail");

  return (
    <>
      <FarmerForm farmer={farmer} method="patch" />
    </>
  );
};

export default EditFarmerForm;
