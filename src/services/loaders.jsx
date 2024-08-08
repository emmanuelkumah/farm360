import { farmersData } from "../data/dummyData";
//should have async await if connecting to api
export const getFarms = () => {
  const listFarms = farmersData.farmers.map((farmer) => farmer.farms);
  return listFarms;
};
