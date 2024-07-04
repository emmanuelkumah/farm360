import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Dashboard, Farmers, User } from "./pages";
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
    element: <App />,
  },
  {
    path: "/login",
    element: (
      <div>
        <h1 className="text-4xl">Login page</h1>
      </div>
    ),
  },
  {
    path: "/users",
    element: <User />,
  },

  {
    path: "/farmers",
    element: <Farmers />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
