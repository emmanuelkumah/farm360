import React, { useState } from "react";
import { Button } from "flowbite-react";

import { AddFarm, Search } from "../components";
const Farms = () => {
  const [openFarmForm, setOpenFarmForm] = useState(false);
  return (
    <div className="m-10">
      <Search />
      <div className="my-10">
        <Button onClick={() => setOpenFarmForm(true)}>Add new farmer</Button>
      </div>
      <AddFarm openFarmForm={openFarmForm} setOpenFarmForm={setOpenFarmForm} />
    </div>
  );
};

export default Farms;
