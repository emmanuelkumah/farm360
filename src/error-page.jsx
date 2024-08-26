import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error.response);
  // console.log(error.response.data.message);
  let message = "Something Went Wrong";
  if (error.response.status === 500 || error.response.status === 401) {
    message = error.response.data.message;
  }
  if (error.status === 404) {
    message = "Could not find the page you are looking for";
  }
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{message}</p>
    </div>
  );
}
