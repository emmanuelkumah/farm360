import React from "react";
import { ShipmentData } from "../components";
import { shipmentActivities } from "../data/dummyData";

const Shipment = () => {
  return (
    <>
      <ShipmentData />
    </>
  );
};

export default Shipment;

export const loader = () => {
  return shipmentActivities;
};
