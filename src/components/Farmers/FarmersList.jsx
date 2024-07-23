import React, { useState } from "react";
import { Table } from "flowbite-react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useFarmersContext } from "../../context/FarmersProvider";
import EditFarmer from "./EditFarmer";

const FarmersList = () => {
  const { dispatch, state } = useFarmersContext();
  console.log(state);
  // const { farmers } = state;

  const [editFarmer, setEditFarmer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteFarmer = (id) => {
    dispatch({
      type: "DELETE_FARMER",
      id: id,
    });
  };
  const handleEditFarmer = (farmer) => {
    setEditFarmer(farmer);
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing && (
        <EditFarmer
          editFarmer={editFarmer}
          setEditFarmer={setEditFarmer}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Picture</Table.HeadCell>
          <Table.HeadCell>First Name</Table.HeadCell>
          <Table.HeadCell>Last Name</Table.HeadCell>
          <Table.HeadCell>Gender</Table.HeadCell>

          <Table.HeadCell>Date of Birth</Table.HeadCell>
          <Table.HeadCell>Contact</Table.HeadCell>
          <Table.HeadCell>Home address</Table.HeadCell>
          <Table.HeadCell>Crop Grown</Table.HeadCell>
          <Table.HeadCell>Farmer Type</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {state.farmers.map((farmer) => (
            <Table.Row
              key={farmer.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <img
                  src={URL.createObjectURL(farmer.picture)}
                  alt="image"
                  className="rounded-full w-10 h-10"
                />
              </Table.Cell>
              <Table.Cell>{farmer.firstName}</Table.Cell>
              <Table.Cell>{farmer.lastName}</Table.Cell>
              <Table.Cell>{farmer.gender}</Table.Cell>

              <Table.Cell>{farmer.dateOfBirth.toDateString()}</Table.Cell>

              <Table.Cell>{farmer.contact}</Table.Cell>
              <Table.Cell>{farmer.homeAddress}</Table.Cell>
              <Table.Cell>{farmer.cropType}</Table.Cell>
              <Table.Cell>{farmer.farmerType}</Table.Cell>

              <Table.Cell>
                <div className="flex gap-5">
                  <MdEdit
                    className="text-xl hover:text-teal-500 cursor-pointer"
                    onClick={() => handleEditFarmer(farmer)}
                  />
                  <MdDelete
                    className="text-xl hover:text-red-700 cursor-pointer"
                    onClick={() => handleDeleteFarmer(farmer.id)}
                  />
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default FarmersList;
