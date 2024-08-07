import React from "react";
import { Table } from "flowbite-react";
import { useActivitiesContext } from "../../context/FarmersProvider";
const PrePlantingData = () => {
  const {
    activitiesState: { prePlanting },
  } = useActivitiesContext();
  console.log(prePlanting);
  return (
    <>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Farm name</Table.HeadCell>
            <Table.HeadCell>Land size (acres)</Table.HeadCell>
            <Table.HeadCell>Clearing date</Table.HeadCell>
            <Table.HeadCell>Ploughing date</Table.HeadCell>
            <Table.HeadCell>Harrowing date </Table.HeadCell>
            <Table.HeadCell>Manual Preparation date</Table.HeadCell>
            <Table.HeadCell>Ridging date</Table.HeadCell>
            <Table.HeadCell>Mould Molding date</Table.HeadCell>
            <Table.HeadCell>Sprayed Chemical </Table.HeadCell>
            <Table.HeadCell>Planted material </Table.HeadCell>
            <Table.HeadCell>Source of Planted material </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {prePlanting.map((activity) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={activity.farmId}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {activity.farmId}
                </Table.Cell>
                <Table.Cell>{activity.landSize}</Table.Cell>
                <Table.Cell>{activity.clearing}</Table.Cell>
                <Table.Cell>{activity.ploughing}</Table.Cell>
                <Table.Cell>{activity.harrowing}</Table.Cell>
                <Table.Cell>{activity.manualPrep}</Table.Cell>
                <Table.Cell>{activity.ridging}</Table.Cell>
                <Table.Cell>{activity.moundMolding}</Table.Cell>

                <Table.Cell>{activity.chemicalName}</Table.Cell>
                <Table.Cell>{activity.plantPart}</Table.Cell>
                <Table.Cell>{activity.source}</Table.Cell>

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
