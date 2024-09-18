import React from "react";
import { Table } from "flowbite-react";
import BackButton from "../BackButton";

const PlantingActivitiesTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <div className="my-4">
        <BackButton />
      </div>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Farm name</Table.HeadCell>
          <Table.HeadCell>Crop</Table.HeadCell>
          <Table.HeadCell>Landsize convered</Table.HeadCell>
          <Table.HeadCell>kilos Planted</Table.HeadCell>
          <Table.HeadCell>Supervisor</Table.HeadCell>
          <Table.HeadCell>Contact</Table.HeadCell>
          <Table.HeadCell>Certificate</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((item) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={item.id}
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.farm}
              </Table.Cell>
              <Table.Cell>{item.cropName}</Table.Cell>
              <Table.Cell>{item.landSizeCovered}</Table.Cell>
              <Table.Cell>{item.kilosPlanted}</Table.Cell>
              <Table.Cell>{item.supervisorName}</Table.Cell>
              <Table.Cell>{item.supervisorContact}</Table.Cell>
              <Table.Cell>{item.supervisorQualification}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default PlantingActivitiesTable;
