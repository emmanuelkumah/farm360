import React, { useState } from "react";
import { Button, Modal, Label, TextInput, Radio } from "flowbite-react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

const AddFarm = ({ openFarmForm, setOpenFarmForm }) => {
  const [farm, setFarm] = useState({
    farmName: "",
    size: "",
    address: "",
    region: "",
    district: "",
    community: "",
  });
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  console.log(selectedRegion);
  const handleAddFarmChange = (e) => {
    const { name, value } = e.target;

    setFarm({
      ...farm,
      [name]: value,
    });
  };
  const handleRegionChange = (val) => {
    setSelectedRegion(val);
  };
  const handleDistrictChange = (val) => {
    setSelectedDistrict(val);
  };
  return (
    <div>
      <Modal show={openFarmForm} onClose={() => setOpenFarmForm(false)}>
        <Modal.Header>Add Farm</Modal.Header>
        <Modal.Body className="flex justify-center">
          <form
            className="flex max-w-md flex-col gap-4"
            // onSubmit={onEditSubmit}
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
                <Label htmlFor="region" value="Community" />
              </div>{" "}
              <div>
                <RegionDropdown
                  country="Ghana"
                  name="region"
                  value={selectedRegion}
                  onChange={(val) => handleRegionChange(val)}
                />
              </div>
              {selectedRegion && (
                <div>
                  <label>Select District:</label>
                  {/* Replace the options with the actual districts for the selected region */}
                  <select
                    value={selectedDistrict}
                    onChange={(e) => handleDistrictChange(e.target.value)}
                  >
                    <option value="">Select District</option>
                    {/* Replace the options with the actual districts for the selected region */}
                    <option value="district1">District 1</option>
                    <option value="district2">District 2</option>
                    <option value="district3">District 3</option>
                  </select>
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
