import React, { useState } from "react";
import { Button } from "flowbite-react";

import { AddFarm, FarmsList, Search } from "../components";
import { useFarmersContext } from "../context/FarmersProvider";
const Farms = () => {
  const [openFarmForm, setOpenFarmForm] = useState(false);
  const { farmState } = useFarmersContext();

  console.log(farmState);
  return (
    <div className="m-10">
      <Search />
      <div className="my-10">
        <Button onClick={() => setOpenFarmForm(true)}>Add new farm</Button>
      </div>
      <AddFarm openFarmForm={openFarmForm} setOpenFarmForm={setOpenFarmForm} />
      <section>
        <FarmsList />
      </section>
    </div>
  );
};

export default Farms;
