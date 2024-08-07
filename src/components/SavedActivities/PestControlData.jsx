import React from "react";
import { Table } from "flowbite-react";
import { useActivitiesContext } from "../../context/FarmersProvider";

const PestControlData = () => {
  const {
    activitiesState: { pestControl },
  } = useActivitiesContext();
  console.log(pestControl);
  return (
    <>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Farm name</Table.HeadCell>
            <Table.HeadCell>Pest control date(Early stage)</Table.HeadCell>
            <Table.HeadCell>Chemical used</Table.HeadCell>
            <Table.HeadCell>Rate of application</Table.HeadCell>
            <Table.HeadCell>Pest control date (Growing stage)</Table.HeadCell>

            <Table.HeadCell>Chemical used</Table.HeadCell>
            <Table.HeadCell>Rate of application</Table.HeadCell>
            <Table.HeadCell>Pest control dae (Pre-harvesting)</Table.HeadCell>
            <Table.HeadCell>Chemical used</Table.HeadCell>
            <Table.HeadCell>Rate of application</Table.HeadCell>
            <Table.HeadCell>Supervisor</Table.HeadCell>
            <Table.HeadCell>Contact </Table.HeadCell>
            <Table.HeadCell>Certificate </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {pestControl.map((activity) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={activity.farmId}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {activity.farmId}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {activity.earlyStageDate}
                </Table.Cell>
                <Table.Cell>{activity.earlyStageChemical}</Table.Cell>
                <Table.Cell>{activity.rateOfAppEarlyStage}</Table.Cell>
                <Table.Cell>{activity.growingStageDate}</Table.Cell>
                <Table.Cell>{activity.growingStageChemical}</Table.Cell>
                <Table.Cell>{activity.rateAppGrowingStage}</Table.Cell>
                <Table.Cell>{activity.preharvestingDate}</Table.Cell>
                <Table.Cell>{activity.preharvestingChemical}</Table.Cell>
                <Table.Cell>{activity.rateOfAppPreharv}</Table.Cell>
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

export default PestControlData;
