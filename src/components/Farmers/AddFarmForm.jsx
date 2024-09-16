import React, { useState } from "react";
import { Button, Modal, Label, TextInput, Select } from "flowbite-react";

import { districts, regions } from "../../data/requiredData";
// import { useFarmersContext } from "../../context/FarmersProvider";

const AddFarm = ({ openFarmForm, setOpenFarmForm }) => {
  const { farmDispatch } = useFarmersContext();
  const [farm, setFarm] = useState({
    farmName: "",
    size: "",
    address: "",
    region: "",
    district: "",
    community: "",
  });
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState([]);

  const showDistricts = (id) => {
    setSelectedRegion(id);
    // const district = districts.map((district) => district.regionId === id);
    // console.log(district);
  };

  const handleAddFarmChange = (e) => {
    const { name, value } = e.target;

    setFarm({
      ...farm,
      [name]: value,
    });
  };
  const handleRegionChange = (e) => {
    showDistricts(e.target.value);
  };
  const handleDistrictSelect = (e) => {
    setFarm({
      ...farm,
      district: e.target.value,
    });
  };
  const handleAddFarmSubmit = (e) => {
    e.preventDefault(console.log(farm));
    farmDispatch({
      type: "ADD_FARM",
      payload: { id: Math.floor(Math.random() * 1000000), ...farm },
    });
    setOpenFarmForm(false);
    setFarm({
      farmName: "",
      size: "",
      address: "",
      region: "",
      district: "",
      community: "",
    });
  };
  return (
    <div>
      <Modal show={openFarmForm} onClose={() => setOpenFarmForm(false)}>
        <Modal.Header>Add Farm</Modal.Header>
        <Modal.Body className="flex justify-center">
          <form
            className="flex max-w-md flex-col gap-4"
            onSubmit={handleAddFarmSubmit}
          >
            <section className="flex flex-col md:flex-row md:gap-5">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="farmName" value="Farm name" />
                </div>
                <TextInput
                  id="name"
                  type="text"
                  //   icon={FaRegUserCircle}
                  value={farm.name}
                  placeholder="Enter farm name"
                  name="farmName"
                  onChange={(e) => handleAddFarmChange(e)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="size" value="Farm size" />
                </div>
                <TextInput
                  id="size"
                  type="text"
                  placeholder="Enter farm size"
                  value={farm.size}
                  name="size"
                  onChange={(e) => handleAddFarmChange(e)}
                  required
                />
              </div>
            </section>
            <section className="flex flex-col md:flex-row md:gap-5">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="address" value="Digital Address" />
                </div>
                <TextInput
                  id="address"
                  type="text"
                  placeholder="Enter GPS location"
                  value={farm.address}
                  name="address"
                  onChange={(e) => handleAddFarmChange(e)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="community" value="Community" />
                </div>
                <TextInput
                  id="communit"
                  type="text"
                  placeholder="Name of community"
                  value={farm.community}
                  name="community"
                  onChange={(e) => handleAddFarmChange(e)}
                  required
                />
              </div>
            </section>
            <section>
              <div className="mb-2 block">
                <Label htmlFor="region" value="Region" />
                <div>
                  <Select onChange={handleRegionChange}>
                    <option>Select Region</option>
                    {regions.map((region) => (
                      <option key={region.regionId} value={region.regionId}>
                        {" "}
                        {region.name}
                      </option>
                    ))}
                  </Select>
                  {}
                </div>
              </div>
            </section>
            <section>
              {selectedRegion && (
                <div className="mb-2 block">
                  <Label htmlFor="district" value="District" />
                  <div>
                    <Select onChange={handleDistrictSelect}>
                      <option>Select District</option>
                      <option value="District 1">District 1</option>
                      <option value="District 2">District 2</option>
                      <option value="District 3">District 3</option>
                      <option value="District 4">District 4</option>
                    </Select>
                  </div>
                </div>
              )}
            </section>

            <Button type="submit">Save Changes</Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddFarm;
