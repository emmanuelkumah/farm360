import React, { useState } from "react";
import { useFarmersContext } from "../../context/FarmersProvider";

const AddFarmer = () => {
  const [farmer, setFarmer] = useState("");
  const { dispatch } = useFarmersContext();

  const handleAddFarmer = () => {
    dispatch({
      type: "ADD_FARMER",
      payload: farmer,
    });
    setFarmer("");
  };
  return (
    <div>
      <input
        type="text"
        name="farmer"
        id=""
        value={farmer}
        placeholder="Add farmer"
        onChange={(e) => setFarmer(e.target.value)}
      />
      <button onClick={handleAddFarmer}>Add farmer</button>
    </div>
  );
};

export default AddFarmer;
