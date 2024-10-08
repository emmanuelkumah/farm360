import React from "react";
import { Table } from "flowbite-react";
import { useLoaderData } from "react-router-dom";

const ShipmentData = () => {
  const data = useLoaderData();
  return (
    <>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Farm name</Table.HeadCell>
            <Table.HeadCell>Exit Date</Table.HeadCell>
            <Table.HeadCell>Destination Country</Table.HeadCell>
            <Table.HeadCell>Port of entry</Table.HeadCell>
            <Table.HeadCell>Port of exit</Table.HeadCell>

            <Table.HeadCell>Customer name</Table.HeadCell>
            <Table.HeadCell>Contact</Table.HeadCell>
            <Table.HeadCell>Address</Table.HeadCell>
            <Table.HeadCell>Packaging</Table.HeadCell>
            <Table.HeadCell>Number of kilos per package</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data.map((activity, index) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={index}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {activity.farmId}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {activity.exitDate}
                </Table.Cell>
                <Table.Cell>{activity.destination}</Table.Cell>
                <Table.Cell>{activity.entry}</Table.Cell>
                <Table.Cell>{activity.exit}</Table.Cell>
                <Table.Cell>{activity.customername}</Table.Cell>
                <Table.Cell>{activity.contact}</Table.Cell>
                <Table.Cell>{activity.address}</Table.Cell>
                <Table.Cell>{activity.packingMethod}</Table.Cell>
                <Table.Cell>{activity.kilosPerPackage}</Table.Cell>

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

export default ShipmentData;
