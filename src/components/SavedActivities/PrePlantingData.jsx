import React from "react";
import { Table } from "flowbite-react";
import { useLoaderData } from "react-router-dom";
const PrePlantingData = () => {
  const data = useLoaderData();
  return (
    <>
      <div className="container mx-auto overflow-x-auto mt-20 md:mt-10">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Farm name</Table.HeadCell>
            <Table.HeadCell>Prepared date</Table.HeadCell>
            <Table.HeadCell>Land size (acres)</Table.HeadCell>
            <Table.HeadCell>Clearing date</Table.HeadCell>
            <Table.HeadCell>Ploughing date</Table.HeadCell>
            <Table.HeadCell>Harrowing date </Table.HeadCell>
            <Table.HeadCell>Manual Preparation date</Table.HeadCell>
            <Table.HeadCell>Ridging date</Table.HeadCell>
            <Table.HeadCell>Mould Molding date</Table.HeadCell>
            <Table.HeadCell>Sprayed Chemical </Table.HeadCell>
            <Table.HeadCell>Rate of application </Table.HeadCell>
            <Table.HeadCell>Date of application </Table.HeadCell>

            <Table.HeadCell>Planted material </Table.HeadCell>
            <Table.HeadCell>Source of Planted material </Table.HeadCell>
            <Table.HeadCell>Quantity of planting material </Table.HeadCell>

            <Table.HeadCell>Treatment method </Table.HeadCell>
            <Table.HeadCell>Treated </Table.HeadCell>

            <Table.HeadCell>Yield </Table.HeadCell>
            <Table.HeadCell>Actions </Table.HeadCell>
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
                <Table.Cell>{activity.preparedDate}</Table.Cell>
                <Table.Cell>{activity.landSize}</Table.Cell>

                <Table.Cell>{activity.clearingDate}</Table.Cell>
                <Table.Cell>{activity.ploughingDate}</Table.Cell>
                <Table.Cell>{activity.harrowingDate}</Table.Cell>
                <Table.Cell>{activity.manualpreparationDate}</Table.Cell>
                <Table.Cell>{activity.ridgingDate}</Table.Cell>
                <Table.Cell>{activity.moundDate}</Table.Cell>
                <Table.Cell>{activity.chemicalUsed}</Table.Cell>
                <Table.Cell>{activity.rateOfApplication}</Table.Cell>
                <Table.Cell>{activity.dateofchemicalapplication}</Table.Cell>
                <Table.Cell>{activity.plantPart}</Table.Cell>
                <Table.Cell>{activity.source}</Table.Cell>
                <Table.Cell>{activity.quantity}</Table.Cell>
                <Table.Cell>{activity.treatmentMethod}</Table.Cell>
                <Table.Cell>{activity.isTreated}</Table.Cell>
                <Table.Cell>{activity.yield}</Table.Cell>

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

export default PrePlantingData;
