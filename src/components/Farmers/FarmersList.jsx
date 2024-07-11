import React from "react";

const FarmersList = ({ state }) => {
  const { farmers } = state;
  return (
    <div>
      Farmers will show here
      {farmers.map((farmer) => (
        <li key={farmer.id}>{farmer.farmer}</li>
      ))}
    </div>
  );
};

export default FarmersList;
