import React from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import { Button } from "flowbite-react";
import { MdVerifiedUser } from "react-icons/md";
import userImage from "../../assets/images/emma2.png";

const FarmerDetails = () => {
  const farmerDetail = useRouteLoaderData("farmer-detail");

  return (
    <>
      <div>
        <div className="m-10">
          <Link to="/app/farmers">
            <Button className="bg-main  focus:bg-secondary">Go Back</Button>
          </Link>
        </div>

        <section className="bg-secondary w-full md:w-1/2 h-full rounded-lg shadow-md container mx-auto p-10">
          <h2 className="border-l-4 border-main pl-2 mb-4">Farmer Details</h2>
          <div className="border border-main rounded-md p-4">
            <div className="flex gap-4">
              <img
                src={userImage}
                alt="Farmer"
                style={{ width: "100px", height: "100px" }}
              />
              <div>
                <h1 className="text-2xl text-main">
                  {farmerDetail.firstName} {farmerDetail.lastName}
                </h1>
                <div className="grid gap-2 grid-cols-1 md:grid-cols-4 md:gap-6">
                  <div>
                    <h3 className="text-md">Date of birth</h3>
                    <p className="text-xl"> {farmerDetail.dateOfBirth}</p>
                  </div>
                  <div>
                    <h3 className="text-md">Gender</h3>
                    <p className="text-xl">{farmerDetail.gender}</p>
                  </div>
                  <div>
                    <h3 className="text-md">Contact</h3>
                    <p className="text-xl">{farmerDetail.contact}</p>
                  </div>
                  <div>
                    <h3>Farmer Type</h3>
                    <p className="text-xl">{farmerDetail.type}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <div className="bg-main text-slate-100 p-4 rounded-lg">
              <h3 className="text-xl">{farmerDetail.gps}</h3>
              <p className="text-xs">Ghana Post Address</p>
            </div>
            <div className="bg-main text-slate-100 p-4 rounded-lg">
              <h3 className="text-xl">{farmerDetail.address}</h3>
              <p className="text-xs">Home Address</p>
            </div>
            <div className="bg-main text-slate-100 p-4 rounded-lg">
              <h3 className="text-xl">{farmerDetail.region}</h3>
              <p className="text-xs">Region</p>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-2 md:grid-cols-3 gap-4 md:mt-10">
            <div className="bg-main text-slate-100 p-4 rounded-lg">
              <h3 className="text-xl">{farmerDetail.district}</h3>
              <p className="text-xs">District</p>
            </div>
            <div className="bg-main text-slate-100 p-4 rounded-lg">
              <h3 className="text-xl">{farmerDetail.community}</h3>
              <p className="text-xs">Community</p>
            </div>
            <div className="bg-main text-slate-100 p-4 rounded-lg">
              <h3 className="text-xl">{farmerDetail.group}</h3>
              <p className="text-xs">Group</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FarmerDetails;
