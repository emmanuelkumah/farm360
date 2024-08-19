import React from "react";
import { StorageData } from "../components";
import { storageActivitiesData } from "../data/dummyData";

const Storage = () => {
  return (
    <>
      <StorageData />
    </>
  );
};

export default Storage;

export const loader = () => {
  return storageActivitiesData;
};
