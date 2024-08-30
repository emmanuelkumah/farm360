import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  let title = "An error occurred!";
  let message = "Something went wrong!";

  //   if (error.response.status === 500) {
  //     message = error.response.data.message;
  //   }
  //   if (error.response.status === 400) {
  //     message = error.response.data.message;
  //   }
  //   if (error.response.status === 422) {
  //     message = error.response.data.message;
  //   }
  //   if (error.response.status === 401) {
  //     message = error.response.data.message;
  //   }
  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }
  return (
    <>
      <section>
        <h3>{title}</h3>
        <p>{message}</p>
      </section>
    </>
  );
};

export default Error;
