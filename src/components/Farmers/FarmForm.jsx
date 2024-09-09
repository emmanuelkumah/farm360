import React, { useState, useEffect } from "react";
import { Button, Label, TextInput, Select, Radio } from "flowbite-react";
import { updateFarmDetails } from "../../data/dummyData";
import { Form, redirect, useNavigation } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuthToken } from "../../utils/auth";
import axios from "axios";

const FarmForm = ({ farm, method }) => {
  const [token, setToken] = useState(getAuthToken());
  const [farmers, setFarmers] = useState([]);
  const [communities, setCommunities] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    fetchFarmersCommunities();
  }, []);

  const fetchFarmersCommunities = async () => {
    try {
      const [farmers, communities] = await Promise.all([
        axios.get("https://dev.bjlfarmersmarket.net/farmers", {
          headers: {
            Authorization: `Bearer ${token}`,
            "X-Origin": "WEB",
          },
        }),
        axios.get("https://dev.bjlfarmersmarket.net/geo/communities", {
          headers: {
            Authorization: `Bearer ${token}`,
            "X-Origin": "WEB",
          },
        }),
      ]);
      setCommunities(communities.data.data);
      setFarmers(farmers.data);
    } catch (error) {
      console.log(error.message);
    }
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
                      name="farmerId"
                      defaultValue={farm ? farm.owner : ""}
                      // onChange={handleRegionChange}
                    >
                      <option>Select farmer</option>
                      {farmers.map((farmer) => (
                        <option value={farmer.id} key={farmer.id}>
                          {farmer.firstName} {farmer.lastName}
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
                      defaultValue={farm ? farm.name : ""}
                      placeholder="Enter farm name"
                      name="name"
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
                      name="landSize"
                      defaultValue={farm ? farm.size : ""}
                      required
                    />
                  </div>
                  <div>
                    <fieldset className="flex max-w-md flex-col gap-4">
                      <legend className="mb-4">Select crop type</legend>
                      <div className="flex items-center gap-2">
                        <Radio
                          id="soy"
                          name="cropType"
                          value="SOYA"
                          defaultChecked
                        />
                        <Label htmlFor="soya">Soya</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio id="shea" name="shea" value="Shea" disabled />
                        <Label htmlFor="shea">Shea</Label>
                      </div>
                    </fieldset>
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
                      name="gpsAddress"
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
                    <Select
                      id="community"
                      required
                      name="communityId"
                      // onChange={handleRegionChange}
                    >
                      <option>Select community</option>

                      {communities.map((community) => (
                        <option value={community.id} key={community.id}>
                          {community.name}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>

                <Button type="submit" className="mt-4 w-[100%] bg-main">
                  {navigation.state === "submitting"
                    ? "Submitting data..."
                    : "Save details"}{" "}
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
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();
  if (method === "POST") {
    const farmDetails = {
      name: data.get("name"),
      communityId: data.get("communityId"),
      cropType: data.get("cropType"),
      gpsAddress: data.get("gpsAddress"),
      landSize: Number(data.get("landSize")),
      farmerId: Number(data.get("farmerId")),
    };

    console.log(farmDetails);
    try {
      const response = await axios.post(
        "https://dev.bjlfarmersmarket.net/farm",
        farmDetails,
        {
          headers: {
            "X-Origin": "WEB",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response from server:", response.data);
      toast.success("Farm data submitted successfully!");
      return redirect("/app/farms");
    } catch (error) {
      console.log(error);
      toast.error("Error submitting data. Please try again.");
      return error;
    }
    //connect to api and sent data
    // createFarm(firstFarm, secondFarm);
  }

  if (method === "PATCH") {
    const updateFarm = {
      id: params.farmId,
      name: data.get("farmName"),
      owner: data.get("owner"),
      size: data.get("farmSize"),
      crop: data.get("crop"),
      gps: data.get("gps"),
      community: data.get("community"),
      region: data.get("region"),
      district: data.get("district"),
    };
    //connect to api and update farm
    updateFarmDetails(updateFarm);
  }

  //redirect to farms route
  return redirect("..");
};
