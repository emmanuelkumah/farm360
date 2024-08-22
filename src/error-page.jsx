import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let message = "Something Went Wrong";
  if (error.status === 500 || error.status === 401) {
    message = error.data.message;
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
