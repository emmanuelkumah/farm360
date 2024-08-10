import React from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import { Button } from "flowbite-react";

const FarmerDetails = () => {
  //   const farmerDetail = useLoaderData();
  const farmerDetail = useRouteLoaderData("farmer-detail");

  return (
    <>
      <div className="bg-white h-full rounded-lg shadow-md container mx-auto">
        <Link to="/app/farmers">
          <Button>Go Back</Button>
        </Link>
        <section className="px-10">
          <h1>{farmerDetail.firstName}</h1>
          <h2>{farmerDetail.lastName}</h2>
          <div>
            <p>{farmerDetail.gender}</p>
            <p>{farmerDetail.dateOfBirth}</p>
            <p>{farmerDetail.region}</p>
            <p>{farmerDetail.district}</p>
            <p>{farmerDetail.community}</p>
            <p>{farmerDetail.type}</p>
            <p>{farmerDetail.gps}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default FarmerDetails;
