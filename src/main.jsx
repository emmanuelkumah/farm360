import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
// import Root from "./routes/HomeLayout";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import { ContextProvider } from "./context/ContextProvider";

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
  FarmActivities,
  Landing,
  AddFarmer,
  EditFarmer,
  ViewFarmer,
  AddFarm,
  ViewFarm,
  EditFarm,
  FertilizerActivities,
  WeedControlActivities,
  Sales,
  Storage,
  PestControlActivities,
  Shipment,
  Login,
  Error,
  NewUser,
  EditUser,
  PrePlanting,
  Planting,
  WeedControl,
  Fertilizer,
  PestControl,
  Harvesting,
  ViewActivities,
} from "./pages";

import HomeLayout from "./routes/HomeLayout";
import { loader as farmsLoader } from "./pages/Farms";
import { loader as farmersLoader } from "./pages/Farmers";
import { loader as farmerDetails } from "./pages/ViewFarmer";
import { loader as farmDetailsLoader } from "./pages/ViewFarm";

import { loader as UsersLoader } from "./pages/Users";
import ViewPlantingActivities, {
  loader as PlantingLoader,
} from "./pages/ViewPlantingActivities";
import ViewWeedControlActivities, {
  loader as weedControlLoader,
} from "./pages/ViewWeedControlActivities";
import ViewShipmentActivities, {
  loader as shipmentLoader,
} from "./pages/ViewShipmentActivities";
import { action as deleteFarmerAction } from "./pages/ViewFarmer";
import { action as farmerAction } from "./components/Farmers/FarmerForm";
// import { action as farmerAction } from "./pages/AddFarmer";
import { action as manipulateFarmAction } from "./components/Farmers/FarmForm";
import { action as deleteFarmAction } from "./pages/ViewFarm";
// import { action as manipulateActivities } from "./pages/FarmActivity";
import { action as manipulatePlantingActivities } from "./components/Activity/PlantingForm";
import { action as manipulatePrePlantingActivities } from "./components/Activity/PrePlantingForm";
import { action as manipulateFertilizerActivities } from "./components/Activity/FertilizerForm";
import { action as manipulateWeedControlActivities } from "./components/Activity/WeedControlForm";
import { action as manipulatePestControlActivities } from "./components/Activity/PestControlForm";
import { action as preplantingAction } from "./components/Activity/PrePlantingForm";
import { action as plangtingAction } from "./components/Activity/PlantingForm";
import { action as weedControlAction } from "./components/Activity/WeedControlForm";
import { action as fertilizerAction } from "./components/Activity/FertilizerForm";
import { action as shipmentAction } from "./components/Activity/ShipmentForm";
import { action as salesAction } from "./components/Activity/SalesForm";
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
        errorElement: <Error />,

        children: [
          {
            index: true,
            element: <Farmers />,

            loader: farmersLoader,
          },
          {
            path: ":farmerId",
            id: "farmer-detail",
            loader: farmerDetails,

            children: [
              {
                index: true,
                element: <ViewFarmer />,
                action: deleteFarmerAction,
              },
              {
                path: "edit",
                element: <EditFarmer />,
                action: farmerAction,
              },
            ],
          },

          {
            path: "new",
            element: <AddFarmer />,
            action: farmerAction,
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
        errorElement: <Error />,
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
        children: [
          {
            index: true,
            element: <FarmActivities />,
          },
          {
            path: "pre-planting",
            element: <PrePlanting />,
            action: preplantingAction,
          },
          {
            path: "planting",
            element: <Planting />,
            action: plangtingAction,
          },
          {
            path: "weed-control",
            element: <WeedControl />,
            action: weedControlAction,
          },
          {
            path: "fertilizing",
            element: <Fertilizer />,
            action: fertilizerAction,
          },
          {
            path: "pest-control",
            element: <PestControl />,
          },
          {
            path: "harvesting",
            element: <Harvesting />,
          },
          {
            path: "storage",
            element: <Storage />,
          },
          {
            path: "sales",
            element: <Sales />,
            action: salesAction,
          },
          {
            path: "shipment",
            element: <Shipment />,
            action: shipmentAction,
          },
        ],
      },
      {
        path: "farms/:farmId/viewActivities",
        children: [
          {
            index: true,
            element: <ViewActivities />,
          },
          {
            path: "pre-planting",
            element: <h2>Display pre planting activities</h2>,
          },
          {
            path: "planting",
            element: <ViewPlantingActivities />,
            loader: PlantingLoader,
          },
          {
            path: "weed-control",
            element: <ViewWeedControlActivities />,
            loader: weedControlLoader,
          },
          {
            path: "fertilizing",
            element: <h2>Display all fertilizing activities</h2>,
          },
          {
            path: "pest-control",
            element: <h2>Display all pest control activities</h2>,
          },
          {
            path: "harvesting",
            element: <h2>Display all harvesting</h2>,
          },
          {
            path: "storage",
            element: <h2>Display all storage</h2>,
          },
          {
            path: "sales",
            element: <h2>Display all sales</h2>,
          },
          {
            path: "shipment",
            element: <ViewShipmentActivities />,
            loader: shipmentLoader,
          },
        ],
      },
      // saved activing
      // {
      //   path: "cte",
      //   children: [
      //     {
      //       path: "planting",
      //       element: <PlantingActivities />,
      //       loader: PlantingActivitiesLoader,
      //       action: manipulatePlantingActivities,
      //     },
      //     {
      //       path: "preplanting",
      //       element: <PrePlantingActvities />,
      //       loader: prePlantingActivitiesLoader,
      //       action: manipulatePrePlantingActivities,
      //     },
      //     {
      //       path: "fertilizer",
      //       element: <FertilizerActivities />,
      //       loader: fertilizerActivitiesLoader,
      //       action: manipulateFertilizerActivities,
      //     },
      //     {
      //       path: "weedcontrol",
      //       element: <WeedControlActivities />,
      //       action: manipulateWeedControlActivities,
      //       loader: WeedControlActivitiesLoader,
      //     },
      //     {
      //       path: "harvesting",
      //       element: <h2>Harvesting Data</h2>,
      //     },
      //     {
      //       path: "sales",
      //       element: "Sales Data",
      //     },
      //     {
      //       path: "storage",
      //       element: <h2>Storage</h2>,
      //     },
      //     {
      //       path: "pestcontrol",
      //       element: <PestControlActivities />,
      //       action: manipulatePestControlActivities,
      //       loader: PestControlLoader,
      //     },
      //     {
      //       path: "shipment",
      //       element: "Shipment",
      //     },
      //   ],
      // },

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
        <RouterProvider router={router} />
      </AuthProvider>
    </ContextProvider>
  </React.StrictMode>
);
