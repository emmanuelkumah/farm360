import React from "react";
import { Table } from "flowbite-react";

const AllPlantingData = ({ data }) => {
  return (
    <>
      <div className=" container mx-auto overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Farm name</Table.HeadCell>
            <Table.HeadCell>Planting Date</Table.HeadCell>
            <Table.HeadCell>Crop</Table.HeadCell>
            <Table.HeadCell>Kilo Planted</Table.HeadCell>
            <Table.HeadCell>Land size </Table.HeadCell>
            <Table.HeadCell>Supervisor</Table.HeadCell>
            <Table.HeadCell>Supervisor Contact</Table.HeadCell>
            <Table.HeadCell>Certificate</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data.map((activity, index) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={index}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {activity.farmName}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {activity.plantingDate}
                </Table.Cell>
                <Table.Cell>{activity.cropPlanted}</Table.Cell>
                <Table.Cell>{activity.kiloPlanted}</Table.Cell>
                <Table.Cell>{activity.landsizeCovered}</Table.Cell>
                <Table.Cell>{activity.supervisor}</Table.Cell>
                <Table.Cell>{activity.contact}</Table.Cell>
                <Table.Cell>{activity.certificate}</Table.Cell>

                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default AllPlantingData;
