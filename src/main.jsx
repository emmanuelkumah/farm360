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
  ViewFarmer,
  AddFarm,
} from "./pages";

import HomeLayout from "./routes/HomeLayout";
import { loader as farmsLoader } from "./pages/Farms";
import { loader as farmersLoader } from "./pages/Farmers";
import { loader as farmerDetailsLoader } from "./pages/ViewFarmer";
import { action as deleteFarmerAction } from "./pages/ViewFarmer";
import { action as manipulateFarmerAction } from "./components/Farmers/FarmerForm";
import { action as manipulateFarmAction } from "./components/Farmers/FarmForm";
import { ContextProvider } from "./context/ContextProvider";
import FarmersProvider from "./context/FarmersProvider";

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
        children: [
          {
            index: true,
            element: <Farmers />,
            loader: farmersLoader,
          },
          {
            path: ":farmerId",
            id: "farmer-detail",
            loader: farmerDetailsLoader,

            children: [
              {
                index: true,
                element: <ViewFarmer />,
                action: deleteFarmerAction,
              },
              {
                path: "edit",
                element: <EditFarmer />,
                action: manipulateFarmerAction,
              },
            ],
          },

          {
            path: "new",
            element: <AddFarmer />,
            action: manipulateFarmerAction,
          },
        ],
      },
      //farms route
      {
        path: "farms",
        children: [
          {
            index: true,
            element: <Farms />,
          },
          {
            path: ":farmId",
            element: <h2>View farm</h2>,
          },
          {
            path: "new",
            element: <AddFarm />,
            action: manipulateFarmAction,
          },
        ],
      },
      {
        path: "farms/:farmId/activities",
        element: <FarmActivity />,
      },
      {
        path: "all-activities",
        element: <FarmManagement />,
      },
      {
        path: "management/:farmID",
        element: "Farm activities",
      },
      {
        path: "add-farm",
        element: <AddFarm />,
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
        <RouterProvider router={router} />
      </FarmersProvider>
    </ContextProvider>
  </React.StrictMode>
);
