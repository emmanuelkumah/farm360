import React from "react";
import { TextInput } from "flowbite-react";

const Search = () => {
  return (
    <div>
      <div className="w-1/2 mb-10">
        <TextInput
          id="base"
          type="text"
          sizing="md"
          placeholder="Enter search term"
        />
      </div>
    </div>
  );
};

export default Search;
