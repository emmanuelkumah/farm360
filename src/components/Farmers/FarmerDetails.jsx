import React, { useState, useEffect } from "react";
import { Link, useSubmit, useParams } from "react-router-dom";
import { Button } from "flowbite-react";
import userImage from "../../assets/images/emma2.png";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

const FarmerDetails = ({ farmerData, id }) => {
  const farmerDetails = farmerData.data.find(
    (farmer) => farmer.id === Number(id.farmerId)
  );

  const submit = useSubmit();

  const startDeleteHandler = () => {
    const proceed = window.confirm("Are you sure");
    if (proceed) {
      submit(null, { method: "delete" });
    }
  };
  return (
    <>
      <div className="m-10">
        <Link to="/app/farmers">
          <Button className="bg-main focus:bg-secondary">Go Back</Button>
        </Link>
      </div>

      <section className="bg-secondary w-full md:w-1/2 h-full rounded-lg shadow-md container mx-auto p-10">
        <h2 className="border-l-4 border-main pl-2 mb-4">Farmer Details</h2>
        <div className="border border-main rounded-md p-4">
          <div className="flex justify-between">
            <div>
              {farmerDetails.imageUrl !== null ? (
                <img
                  src={`${farmerDetails.imageUrl}`}
                  alt="Farmer"
                  style={{ width: "100p%", height: "100%" }}
                />
              ) : (
                <FaUser />
              )}
            </div>

            <div>
              <h1 className="text-2xl text-main">
                {farmerDetails.firstName} {farmerDetails.lastName}
              </h1>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-4 md:gap-6">
                <div>
                  <h3 className="text-md">Age</h3>
                  <p className="text-xl"> {farmerDetails.age}</p>
                </div>

                <div>
                  <h3 className="text-md">Contact</h3>
                  <p className="text-xl">{farmerDetails.phone}</p>
                </div>
                <div>
                  <h3>Farmer Type</h3>
                  <p className="text-xl">{farmerDetails.farmerType}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          <div className="bg-main text-slate-100 p-4 rounded-lg">
            <h3 className="text-xl">{farmerDetails.cropType.toLowerCase()}</h3>
            <p className="text-xs">Crop Type</p>
          </div>
          <div className="bg-main text-slate-100 p-4 rounded-lg">
            <h3 className="text-xl">{farmerDetails.homeAddress}</h3>
            <p className="text-xs">Home Address</p>
          </div>
          <div className="bg-main text-slate-100 p-4 rounded-lg">
            <h3 className="text-xl">{farmerDetails.community.region}</h3>
            <p className="text-xs">Region</p>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-2 md:grid-cols-3 gap-4 md:mt-10">
          <div className="bg-main text-slate-100 p-4 rounded-lg">
            <h3 className="text-xl">{farmerDetails.community.district}</h3>
            <p className="text-xs">District</p>
          </div>
          <div className="bg-main text-slate-100 p-4 rounded-lg">
            <h3 className="text-xl">{farmerDetails.community.name}</h3>
            <p className="text-xs">Community</p>
          </div>
          <div className="bg-main text-slate-100 p-4 rounded-lg">
            <h3 className="text-xl">{farmerDetails.group}</h3>
            <p className="text-xs">Group</p>
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

export default FarmerDetails;
