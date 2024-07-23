import React, { useState } from "react";
import { Button, Modal, TextInput } from "flowbite-react";
import { Checkbox, Label } from "flowbite-react";
import { useTraceabilityContext } from "../context/TraaceabilityProvider";

const AddTraceabilityFlow = ({ openModal, setOpenModal }) => {
  const { dispatch, state } = useTraceabilityContext();

  console.log(state);
  const dummyActivities = [
    {
      id: 1,
      name: "land Preparation",
      checked: false,
    },
    {
      id: 2,
      name: "Planting",
      checked: false,
    },
    {
      id: 3,
      name: "Weed Control",
      checked: false,
    },
    {
      id: 4,
      name: "Fertilizer Application",
      checked: false,
    },
    {
      id: 5,
      name: "Harvesting",
      checked: false,
    },
    {
      id: 6,
      name: "Pack house",
      checked: false,
    },
  ];

  const [name, setName] = useState("");
  const [activities, setActivities] = useState(dummyActivities);

  const handleFlowNameChange = (event) => {
    setName(event.target.value);
  };
  const handleActivityChange = (id) => {
    setActivities(
      activities.map((activity) =>
        activity.id === id
          ? { ...activity, checked: !activity.checked }
          : activity
      )
    );
  };

  const handleTraceabilitySubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "Add_traceability",
      payload: {
        id: Math.floor(Math.random() * 1000),
        name: name,
        selectedActivities: [...activities],
      },
    });
    setName("");
    setActivities(
      activities.map((activity) => ({ ...activity, checked: false }))
    );
    setOpenModal(false);
  };
  return (
    <div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Create Traceability Flow</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleTraceabilitySubmit}>
            <div className="flex max-w-md flex-col gap-4">
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Traceable Item"
                  className="text-lg"
                />
              </div>
              <TextInput
                id="small"
                type="text"
                placeholder="Enter item to trace"
                value={name}
                onChange={handleFlowNameChange}
                required
              />
              {name !== "" && (
                <section>
                  <h3 className="text-lg mt-3">Select Activity</h3>
                  {activities.map((activity) => (
                    <div className="flex items-center gap-2" key={activity.id}>
                      <Checkbox
                        id={activity.name}
                        checked={activity.checked}
                        onChange={() => handleActivityChange(activity.id)}
                      />
                      <Label htmlFor={activity.name}>{activity.name}</Label>
                    </div>
                  ))}
                </section>
              )}
            </div>
            <Button type="submit" className="my-4">
              Save
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddTraceabilityFlow;
