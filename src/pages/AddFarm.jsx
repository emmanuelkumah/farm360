import React from "react";
import { FarmForm } from "../components";

const AddFarm = () => {
  return (
    <div>
      <FarmForm method="post" />
    </div>
  );
};

export default AddFarm;

// const loader = async () => {
//   const token = getAuthToken();

//   try {
//     const [response1, response2] = await Promise.all([
//       axios.get("https://dev.bjlfarmersmarket.net/farmers", {
//         headers: {
//           "X-Origin": "WEB",
//           Authorization: `Bearer ${token}`,
//         },
//       }),
//       axios.get("https://dev.bjlfarmersmarket.net/geo/communities", {
//         headers: {
//           "X-Origin": "WEB",
//           Authorization: `Bearer ${token}`,
//         },
//       }),
//     ]);

//     // Handle the responses
//     console.log("Response from Endpoint 1:", response1.data);
//     console.log("Response from Endpoint 2:", response2.data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
//   //load farmers data
//   // const data = axios
//   //   .get("https://dev.bjlfarmersmarket.net/farmers", {
//   //     headers: {
//   //       "X-Origin": "WEB",
//   //       Authorization: `Bearer ${token}`,
//   //     },
//   //   })
//   //   .then((response) => {
//   //     console.log(response.data);

//   //     return response.data;
//   //   })
//   //   .catch((error) => console.log(error));
//   return null;
// };
