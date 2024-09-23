import React from "react";
import { Button } from "flowbite-react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link, useSubmit } from "react-router-dom";
import BackButton from "../BackButton";

const FarmDetails = ({ farmData }) => {
  const submit = useSubmit();
  const startDeleteHandler = () => {
    const proceed = window.confirm("Are you sure");
    if (proceed) {
      submit(null, { method: "delete" });
    }
  };
  return (
    <>
      <BackButton />
      <section className="bg-secondary w-full h-full md:w-1/2 md:h-[70%] rounded-lg shadow-md container mx-auto p-10">
        <h2 className="border-l-4 border-main pl-2 mb-4">Farm Details</h2>
        <div className="border border-main rounded-md p-4">
          <div className="flex justify-between">
            <h1 className="text-xl md:text-2xl text-main">
              Farmer: {farmData.owner}
            </h1>
            <h1 className="text-xl md:text-2xl text-main">
              Crop Grown: {farmData.crop}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-2 md:grid-cols-3 gap-4 md:mt-10">
          <div className="bg-main text-slate-100 p-4 rounded-lg">
            <h3 className="text-xl">{farmData.name}</h3>
            <p className="text-xs">farm Name</p>
          </div>
          <div className="bg-main text-slate-100 p-4 rounded-lg">
            <h3 className="text-xl">{farmData.size}</h3>
            <p className="text-xs">farm size</p>
          </div>
          <div className="bg-main text-slate-100 p-4 rounded-lg">
            <h3 className="text-xl">{farmData.gps}</h3>
            <p className="text-xs">GPS</p>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-10">
          <div className="bg-main text-slate-100 p-4 rounded-lg">
            <h3 className="text-xl">{farmData.region}</h3>
            <p className="text-xs">Region</p>
          </div>
          <div className="bg-main text-slate-100 p-4 rounded-lg">
            <h3 className="text-xl">{farmData.district}</h3>
            <p className="text-xs">District</p>
          </div>
          <div className="bg-main text-slate-100 p-4 rounded-lg">
            <h3 className="text-xl">{farmData.community}</h3>
            <p className="text-xs">Community</p>
          </div>
        </div>

        <div className=" mt-10">
          <Button
            className="bg-main rounded-full opacity-50 hover:opacity-100 "
            onClick={startDeleteHandler}
          >
            <RiDeleteBin5Line />
            Delete farmer
          </Button>
        </div>
      </section>
    </>
  );
};

export default FarmDetails;
