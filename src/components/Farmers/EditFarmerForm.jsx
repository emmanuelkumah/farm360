import { useParams, useRouteLoaderData } from "react-router-dom";
import { Form, useNavigate } from "react-router-dom";

import {
  Button,
  Label,
  TextInput,
  Radio,
  FileInput,
  Select,
  Datepicker,
} from "flowbite-react";
import { FaRegUserCircle } from "react-icons/fa";
import { BiHome, BiMap, BiPhone } from "react-icons/bi";
import { regions, districts, groups, crops } from "../../data/dummyData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import FarmerForm from "./FarmerForm";

const EditFarmerForm = () => {
  const [showDistricts, setShowDistricts] = useState([]);
  const [addFarms, setAddFarms] = useState(false);

  const farmer = useRouteLoaderData("farmer-detail");
  console.log(farmer);
  // const getDistricts = (id) => {
  //   const result = districts.find((district) => district.regionId === id);
  //   const { listDistrict } = result;
  //   setShowDistricts(listDistrict);
  // };

  return (
    <>
      <FarmerForm farmer={farmer} />
    </>
  );
};

export default EditFarmerForm;
