import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
// import Root from "./routes/HomeLayout";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import {
  Dashboard,
  Farmers,
  Users,
  Login,
  Farms,
  Reports,
  FarmManagement,
  Traceability,
  FarmActivity,
  Landing,
  AddFarmer,
  EditFarmer,
} from "./pages";
import { ContextProvider } from "./context/ContextProvider";
import FarmersProvider from "./context/FarmersProvider";
import TraaceabilityProvider from "./context/TraaceabilityProvider";
import UserProvider from "./context/UserProvider";
import HomeLayout from "./routes/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "farmers",
        element: <Farmers />,
      },
      {
        path: "farmers/:id/edit",
        element: <EditFarmer />,
      },
      {
        path: "farms",
        element: <Farms />,
      },
      {
        path: "farms/:farmId/activities",
        element: <FarmActivity />,
      },
      {
        path: "management",
        element: <FarmManagement />,
      },
      {
        path: "management/:farmID",
        element: "Farm activities",
      },
      {
        path: "add",
        element: <AddFarmer />,
      },

      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "traceability",
        element: <Traceability />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <FarmersProvider>
        <UserProvider>
          <TraaceabilityProvider>
            <RouterProvider router={router} />
          </TraaceabilityProvider>
        </UserProvider>
      </FarmersProvider>
    </ContextProvider>
  </React.StrictMode>
);
