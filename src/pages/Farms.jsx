import React, { useState } from "react";
import FarmsList from "../components/Farmers/FarmsList";

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
