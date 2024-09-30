import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(
    "server error",
    error

    // error.response?.status,
    // error.response.data.message
  );
  let title = "An error occurred!";
  let message;

  if (error.response.status === 500) {
    message = error.response.data.message;
  }
  if (error.response.status === 400) {
    message = error.response.data.message;
  }
  if (error.response.status === 422) {
    message = error.response.data.message;
  }
  if (error.response.status === 401) {
    message = error.response.data.message;
  }
  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }
  return (
    <>
      <section className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
        <h3 className="text-xl text-main">{title}</h3>
        <p className="text-red-500 text-xl">{message}</p>
      </section>
    </>
  );
};

export default Error;
