import React from "react";

const FarmersList = ({ state }) => {
  const { farmers } = state;
  console.log(farmers);
  return (
    <div>
      Farmers will show here
      {farmers.map((farmer) => (
        <li key={farmer.id}>{farmer.farmer.firstName}</li>
      ))}
    </div>
  );
};

export default FarmersList;
