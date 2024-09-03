import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { getAuthToken } from "../utils/auth";

const RegionContext = createContext(null);

const RegionProvider = ({ children }) => {
  const [token, setToken] = useState(getAuthToken());
  const [regions, setRegions] = useState([]);
  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await axios.get(
          "https://dev.bjlfarmersmarket.net/geo/regions",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "X-Origin": "WEB",
            },
          }
        );
        setRegions(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRegions();
  }, []);
  return (
    <div>
      <RegionContext.Provider value={{ regions }}>
        {children}
      </RegionContext.Provider>
    </div>
  );
};

export default RegionProvider;
export const useRegionContext = () => useContext(RegionContext);
