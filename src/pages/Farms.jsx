import React, { useState, useEffect } from "react";
import FarmsList from "../components/Farmers/FarmsList";
import { Button } from "flowbite-react";

const Farms = () => {
  const [openFarmForm, setOpenFarmForm] = useState(false);

  return (
    <div className="m-10">
      <section>
        <FarmsList />
      </section>
    </div>
  );
};

export default Farms;
