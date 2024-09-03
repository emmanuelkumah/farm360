import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
// import Root from "./routes/HomeLayout";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import { ContextProvider } from "./context/ContextProvider";
import RegionProvider from "./context/RegionProvider";

import { ProtectedRoute } from "./components";
import App from "./App";
import {
  Dashboard,
  Farmers,
  Users,
  AuthPage,
  Farms,
  Reports,
  PlantingActivities,
  PrePlantingActvities,
  Traceability,
  FarmActivity,
  Landing,
  AddFarmer,
  EditFarmer,
  ViewFarmer,
  AddFarm,
  ViewFarm,
  EditFarm,
  FertilizerActivities,
  WeedControlActivities,
  Harvesting,
  Sales,
  Storage,
  PestControlActivities,
  Shipment,
  Login,
  Error,
  NewUser,
  EditUser,
} from "./pages";

import HomeLayout from "./routes/HomeLayout";
import { loader as farmsLoader } from "./pages/Farms";
import { loader as farmersLoader } from "./pages/Farmers";
import { loader as farmerDetailsLoader } from "./pages/ViewFarmer";
import { loader as regionsLoader } from "./pages/AddFarmer";
import { loader as farmDetailsLoader } from "./pages/ViewFarm";
import { loader as PlantingActivitiesLoader } from "./pages/PlantingActivities";
import { loader as prePlantingActivitiesLoader } from "./pages/PrePlantingActivities";
import { loader as fertilizerActivitiesLoader } from "./pages/FertilizerActivities";
import { loader as WeedControlActivitiesLoader } from "./pages/WeedControlActivities";
import { loader as HarvestingLoader } from "./pages/Harvesting";
import { loader as SalesLoader } from "./pages/Sales";
import { loader as StorageLoader } from "./pages/Storage";
import { loader as PestControlLoader } from "./pages/PestControlActivities";
import { loader as ShipmentLoader } from "./pages/Shipment";
import { loader as UsersLoader } from "./pages/Users";

import { action as deleteFarmerAction } from "./pages/ViewFarmer";
import { action as manipulateFarmerAction } from "./components/Farmers/FarmerForm";
import { action as manipulateFarmAction } from "./components/Farmers/FarmForm";
import { action as deleteFarmAction } from "./pages/ViewFarm";
import { action as manipulateActivities } from "./pages/FarmActivity";
import { action as manipulatePlantingActivities } from "./components/Activity/Planting";
import { action as manipulatePrePlantingActivities } from "./components/Activity/PrePlanting";
import { action as manipulateFertilizerActivities } from "./components/Activity/FertilizerApplication";
import { action as manipulateWeedControlActivities } from "./components/Activity/WeedControl";
import { action as manipulateHarvestActivities } from "./components/Activity/Harvesting";
import { action as manipulateSalesActivities } from "./components/Activity/Sales";
import { action as manipulateStorageActivities } from "./components/Activity/Storage";
import { action as manipulatePestControlActivities } from "./components/Activity/PestControl";
import { action as manipulateShipmentActivities } from "./components/Activity/Shipment";
import { action as manipulateUserAction } from "./pages/Users";
import { action as loginAction } from "./pages/Login";
import { action as manipulateUser } from "./pages/NewUser";
import { action as logoutAction } from "./pages/Logout";
// import { checkAuthLoader } from "./utils/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
  {
    path: "/app",
    // loader: checkAuthLoader,
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
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
      //user routes
      {
        path: "users",

        children: [
          {
            index: true,
            element: <Users />,
            loader: UsersLoader,
            action: manipulateUserAction,
          },

          {
            path: "new",
            element: <NewUser />,
            action: manipulateUser,
          },
          {
            path: "edit",
            element: <EditUser />,
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
            loader: farmsLoader,
          },
          {
            path: ":farmId",
            id: "farm-detail",
            loader: farmDetailsLoader,
            children: [
              {
                index: true,
                element: <ViewFarm />,
                action: deleteFarmAction,
              },
              {
                path: "edit",
                element: <EditFarm />,
                action: manipulateFarmAction,
              },
            ],
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
        action: manipulateActivities,
      },
      // saved activing
      {
        path: "cte",
        children: [
          {
            path: "planting",
            element: <PlantingActivities />,
            loader: PlantingActivitiesLoader,
            action: manipulatePlantingActivities,
          },
          {
            path: "preplanting",
            element: <PrePlantingActvities />,
            loader: prePlantingActivitiesLoader,
            action: manipulatePrePlantingActivities,
          },
          {
            path: "fertilizer",
            element: <FertilizerActivities />,
            loader: fertilizerActivitiesLoader,
            action: manipulateFertilizerActivities,
          },
          {
            path: "weedcontrol",
            element: <WeedControlActivities />,
            action: manipulateWeedControlActivities,
            loader: WeedControlActivitiesLoader,
          },
          {
            path: "harvesting",
            element: <Harvesting />,
            action: manipulateHarvestActivities,
            loader: HarvestingLoader,
          },
          {
            path: "sales",
            element: <Sales />,
            action: manipulateSalesActivities,
            loader: SalesLoader,
          },
          {
            path: "storage",
            element: <Storage />,
            action: manipulateStorageActivities,
            loader: StorageLoader,
          },
          {
            path: "pestcontrol",
            element: <PestControlActivities />,
            action: manipulatePestControlActivities,
            loader: PestControlLoader,
          },
          {
            path: "shipment",
            element: <Shipment />,
            action: manipulateShipmentActivities,
            loader: ShipmentLoader,
          },
        ],
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
        path: "traceability",
        element: <Traceability />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <AuthProvider>
        <RegionProvider>
          <RouterProvider router={router} />
        </RegionProvider>
      </AuthProvider>
    </ContextProvider>
  </React.StrictMode>
);
