import React, { useState, useEffect } from "react";
import FarmsList from "../components/Farmers/FarmsList";
import { Button } from "flowbite-react";

const Farms = () => {
  const [openFarmForm, setOpenFarmForm] = useState(false);

  return (
    <div className="m-10">
      <h2>Farms</h2>
      <section>
        <Button>Add new farm</Button>
      </section>
      <section>
        <FarmsList />
      </section>
    </div>
  );
};

export default Farms;
