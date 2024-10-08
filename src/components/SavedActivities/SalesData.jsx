import React from "react";
import { Table } from "flowbite-react";
import { useLoaderData } from "react-router-dom";

const SalesData = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Farm name</Table.HeadCell>
            <Table.HeadCell>Release date</Table.HeadCell>
            <Table.HeadCell>Authorizer name</Table.HeadCell>
            <Table.HeadCell>Contact</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>
            <Table.HeadCell>Buyer name</Table.HeadCell>
            <Table.HeadCell>Buyer quantity</Table.HeadCell>
            <Table.HeadCell>Buyer Contact</Table.HeadCell>
            <Table.HeadCell>Company name</Table.HeadCell>
            <Table.HeadCell>Company quantity</Table.HeadCell>
            <Table.HeadCell>Company's contact</Table.HeadCell>
            <Table.HeadCell>Transport means</Table.HeadCell>
            <Table.HeadCell>Vehicle name</Table.HeadCell>
            <Table.HeadCell>Registration number </Table.HeadCell>
            <Table.HeadCell>Driver's license </Table.HeadCell>
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
                  {activity.releaseDate}
                </Table.Cell>
                <Table.Cell>{activity.authorizer}</Table.Cell>
                <Table.Cell>{activity.authorizerContact}</Table.Cell>
                <Table.Cell>{activity.quantity}</Table.Cell>
                <Table.Cell>{activity.individualBuyerName}</Table.Cell>
                <Table.Cell>{activity.individualBuyerContact}</Table.Cell>
                <Table.Cell>{activity.companyBuyerName}</Table.Cell>
                <Table.Cell>{activity.companyBuyerQuantity}</Table.Cell>
                <Table.Cell>{activity.companyBuyerContact}</Table.Cell>
                <Table.Cell>{activity.transport}</Table.Cell>
                <Table.Cell>{activity.vehicleName}</Table.Cell>
                <Table.Cell>{activity.vehicleRegNumber}</Table.Cell>
                <Table.Cell>{activity.driversLicense}</Table.Cell>

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

export default SalesData;
