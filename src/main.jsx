import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Home page</h1>
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/app",
    element: <Root />,
  },
  {
    path: "/login",
    element: (
      <div>
        <h1 className="text-4xl">Login page</h1>
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
