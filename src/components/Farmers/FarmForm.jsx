import React, { useState, useEffect } from "react";
import { Button, Label, TextInput, Select, Radio, Alert } from "flowbite-react";
import { Form, useNavigation } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuthToken } from "../../utils/auth";
import axios from "axios";
import { HiInformationCircle } from "react-icons/hi";

const FarmForm = ({ farm, method, response }) => {
  const [token, setToken] = useState(getAuthToken());
  const [farmers, setFarmers] = useState([]);
  const [communities, setCommunities] = useState([]);

  const navigation = useNavigation();

  const message = response?.data;
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
          {message ? (
            <Alert
              color="failure"
              icon={HiInformationCircle}
              className="max-w-2xl"
            >
              <span className="font-medium">Info alert!</span>
              <p>{`${message.code} - ${message.message}`}</p>
            </Alert>
          ) : null}
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
                        <Radio id="soya" name="cropType" value="SOYA" />
                        <Label htmlFor="soya">Soya</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio id="shea" name="cropType" value="Shea" />
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

// export const action = async ({ request, params }) => {
//   const method = request.method;
//   const data = await request.formData();
//   if (method === "POST") {
//     const farmDetails = {
//       name: data.get("name"),
//       communityId: data.get("communityId"),
//       cropType: data.get("cropType"),
//       gpsAddress: data.get("gpsAddress"),
//       landSize: Number(data.get("landSize")),
//       farmerId: Number(data.get("farmerId")),
//     };
//     const response = await axiosbaseURL.post("/farm", farmDetails);
//     console.log("response", response);
//     if (
//       response.status === 401 ||
//       response.status === 400 ||
//       response.status === 404 ||
//       response.status === 500
//     ) {
//       throw json({ message: "Could not save farms." });
//     }
//     toast.success("Farm data submitted successfully!");
//     return redirect("/app/farms");
//   }
// };
