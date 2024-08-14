import React, { useState } from "react";
import { Button, Label, TextInput, Radio, Select } from "flowbite-react";
import { regions, districts, crops, farmersData } from "../../data/dummyData";
import { Form, redirect } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { createFarm } from "../../data/dummyData";

const FarmForm = ({ method }) => {
  const [showDistricts, setShowDistricts] = useState([]);
  const [anotherFarm, setAnotherFarm] = useState(false);
  //get all farmer name
  const farmersName = farmersData.map((farmer) => {
    return `${farmer.firstName} ${farmer.lastName}`;
  });

  const farm = {};

  const getDistricts = (id) => {
    const result = districts.find((district) => district.regionId === id);
    const { listDistrict } = result;
    setShowDistricts(listDistrict);
  };

  const handleRegionChange = (e) => {
    const index = e.target.selectedIndex;
    getDistricts(index);
  };
  const onAddSecondFarm = () => {
    setAnotherFarm(!anotherFarm);
  };
  return (
    <div>
      <div className="bg-secondary w-full md:w-1/2 h-[100%] rounded-lg shadow-md container mx-auto">
        <div className="mx-14 py-4">
          <Button
            className="bg-main mt-10  text-secondary hover:text-slate-100 hover:bg-main"
            // onClick={handleGoBack}
          >
            Go Back
          </Button>
        </div>

        <section className="flex flex-col justify-center items-center">
          <Form className="w-[80vw] md:w-[80%] my-4 " method={method}>
            <div className="grid grid-cols-1 gap-4 md:gap-10">
              <section>
                <h2 className="text-xl text-main border-l-4 border-main pl-2 mb-4">
                  {farm ? "Edit Farm Details" : "Capture Farm Details"}
                </h2>
                <div>
                  <div>
                    <div className="my-2 block">
                      <Label
                        htmlFor="farmowner"
                        value="Farm Owner"
                        className="font-semibold"
                      />
                    </div>
                    <Select
                      id="farmowner"
                      required
                      name="owner"
                      //   defaultValue={farm ? farm.owner : ""}
                      // onChange={handleRegionChange}
                    >
                      <option>Select farmer</option>
                      {farmersName.map((name, index) => (
                        <option value={name} key={index}>
                          {name}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>
                    <div className="my-2 block">
                      <Label
                        htmlFor="farm name"
                        value="Farm name"
                        className="font-semibold"
                      />
                    </div>
                    <TextInput
                      id="farmName"
                      type="text"
                      icon={FaRegUserCircle}
                      defaultValue={farm ? farm.farmName : ""}
                      placeholder="Enter farm name"
                      name="farmName"
                      required
                    />
                  </div>
                  <div>
                    <div className="my-2 block">
                      <Label
                        htmlFor="farmSize"
                        value="Farm size"
                        className="font-semibold"
                      />
                    </div>
                    <TextInput
                      id="farmSize"
                      type="number"
                      icon={BiMap}
                      placeholder="Enter farm size in acres"
                      name="farmSize"
                      defaultValue={farm ? farm.farmSize : ""}
                      required
                    />
                  </div>
                  <div>
                    <div className="my-2 block">
                      <Label
                        htmlFor="crop"
                        value="Crop grown"
                        className="font-semibold"
                      />
                    </div>
                    <Select
                      id="crop"
                      required
                      name="crop"
                      //   defaultValue={farm ? farm.owner : ""}
                      // onChange={handleRegionChange}
                    >
                      <option>Select farmer</option>
                      {crops.map((crop, index) => (
                        <option value={crop} key={index}>
                          {crop}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <div className="my-2 block">
                      <Label
                        htmlFor="gps"
                        value="Farm address"
                        className="font-semibold"
                      />
                    </div>
                    <TextInput
                      id="gps"
                      type="text"
                      icon={FaRegUserCircle}
                      placeholder="Enter farm GPS"
                      defaultValue={farm ? farm.gps : ""}
                      name="gps"
                      required
                    />
                  </div>
                  <div>
                    <div className="my-2 block">
                      <Label
                        htmlFor="community"
                        value="Community"
                        className="font-semibold"
                      />
                    </div>
                    <TextInput
                      id="address"
                      type="text"
                      icon={BiMap}
                      name="community"
                      defaultValue={farm ? farm.community : ""}
                      placeholder="Enter community of farm"
                      required
                    />
                  </div>

                  <div>
                    <div className="my-2 block">
                      <Label
                        htmlFor="region"
                        value="Region"
                        className="font-semibold"
                      />
                    </div>
                    <Select
                      id="region"
                      required
                      name="region"
                      defaultValue={farm ? farm.region : ""}
                      onChange={handleRegionChange}
                    >
                      <option>Select region</option>
                      {regions.map((region, index) => (
                        <option value={region.name} key={index}>
                          {region.name}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>
                <div>
                  <div className="my-2 block">
                    <Label
                      htmlFor="district"
                      value="District"
                      className="font-semibold"
                    />
                  </div>
                  <Select
                    id="district"
                    required
                    className="w-full"
                    name="district"
                    defaultValue={farm ? farm.district : ""}
                  >
                    <option>Select District</option>
                    {showDistricts.map((district) => (
                      <option value={district} key={district}>
                        {district}
                      </option>
                    ))}
                  </Select>
                </div>
                <section>
                  <Button className="bg-main mt-4" onClick={onAddSecondFarm}>
                    Add another farm
                  </Button>
                  {anotherFarm && (
                    <section>
                      <div>
                        <div className="my-2 block">
                          <Label
                            htmlFor="secondName"
                            value="Farm name"
                            className="font-semibold"
                          />
                        </div>
                        <TextInput
                          id="secondName"
                          type="text"
                          icon={FaRegUserCircle}
                          defaultValue={farm ? farm.farmName : ""}
                          placeholder="Enter second farm name"
                          name="secondfarmName"
                        />
                      </div>
                      <div>
                        <div className="my-2 block">
                          <Label
                            htmlFor="secondcrop"
                            value="Crop grown"
                            className="font-semibold"
                          />
                        </div>
                        <Select
                          id="secondcrop"
                          name="secondcrop"
                          //   defaultValue={farm ? farm.owner : ""}
                          // onChange={handleRegionChange}
                        >
                          <option>Select farmer</option>
                          {crops.map((crop, index) => (
                            <option value={crop} key={index}>
                              {crop}
                            </option>
                          ))}
                        </Select>
                        <div>
                          <div className="my-2 block">
                            <Label
                              htmlFor="secondfarmSize"
                              value="Farm size"
                              className="font-semibold"
                            />
                          </div>
                          <TextInput
                            id="secondfarmSize"
                            type="number"
                            icon={BiMap}
                            placeholder="Enter farm size in acres"
                            name="secondfarmSize"
                            defaultValue={farm ? farm.farmSize : ""}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="my-2 block">
                          <Label
                            htmlFor="secondgps"
                            value="Farm address"
                            className="font-semibold"
                          />
                        </div>
                        <TextInput
                          id="secondgps"
                          type="text"
                          icon={FaRegUserCircle}
                          placeholder="Enter farm GPS"
                          defaultValue={farm ? farm.gps : ""}
                          name="secondgps"
                        />
                      </div>
                      <div>
                        <div className="my-2 block">
                          <Label
                            htmlFor="secondcommunity"
                            value="Community"
                            className="font-semibold"
                          />
                        </div>
                        <TextInput
                          id="secondcommunity"
                          type="text"
                          icon={BiMap}
                          name="secondcommunity"
                          defaultValue={farm ? farm.community : ""}
                          placeholder="Enter community of farm"
                        />
                      </div>
                    </section>
                  )}
                </section>
                <Button type="submit" className="mt-4 w-[100%] bg-main">
                  Save Details
                </Button>
              </section>
            </div>
          </Form>
        </section>
      </div>
    </div>
  );
};

export default FarmForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();

  const firstFarm = {
    id: String(Math.floor(Math.random() * 20000)),
    name: data.get("farmName"),
    owner: data.get("owner"),
    size: data.get("farmSize"),
    crop: data.get("crop"),
    gps: data.get("gps"),
    community: data.get("community"),
    region: data.get("region"),
    district: data.get("district"),
  };

  const secondFarm = {
    id: String(Math.floor(Math.random() * 20000)),
    name: data.get("secondfarmName"),
    owner: data.get("owner"),
    size: data.get("secondfarmSize"),
    crop: data.get("secondcrop"),
    gps: data.get("secondgps"),
    community: data.get("secondcommunity"),
    region: data.get("region"),
    district: data.get("district"),
  };

  //connect to api and sent data
  createFarm(firstFarm, secondFarm);
  //redirect to farms route
  return redirect("..");
};
