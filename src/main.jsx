import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
// import Root from "./routes/HomeLayout";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import { ContextProvider } from "./context/ContextProvider";

import { ProtectedRoute, ResetPasswordForm } from "./components";
import App from "./App";
import {
  Dashboard,
  Farmers,
  Users,
  AuthPage,
  Farms,
  Reports,
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
  LandPreparationActivities,
  Transportation,
} from "./pages";

import HomeLayout from "./routes/HomeLayout";

import { loader as farmerDetails } from "./pages/ViewFarmer";
import { loader as farmDetailsLoader } from "./pages/ViewFarm";
import { loader as storageLoader } from "./pages/ViewStorageActivities";

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
import ViewSalesActivities, {
  loader as salesLoader,
} from "./pages/ViewSalesActivities";
import ViewPestControlActivities, {
  loader as pestControlLoader,
} from "./pages/ViewPestControlActivities";
import ViewTransportationActivities, {
  loader as transportationLoader,
} from "./pages/ViewTransportationActivities";
import ViewPrePlantingActivities, {
  loader as preplantingLoader,
} from "./pages/ViewPrePlantingActivities";
import ViewLandPreparationActivities, {
  loader as landPreparationLoader,
} from "./pages/ViewLandPreparationActivities";
import ViewFertilizingActivities, {
  loader as fertilizerLoader,
} from "./pages/ViewFertilizingActivities";

import { action as deleteFarmerAction } from "./pages/ViewFarmer";
import { action as farmerAction } from "./pages/AddFarmer";
import { action as deleteFarmAction } from "./pages/ViewFarm";
import { action as addFarmAction } from "./pages/AddFarm";
import { action as preplantingAction } from "./components/Activity/PrePlantingForm";
import { action as plangtingAction } from "./components/Activity/PlantingForm";
import { action as weedControlAction } from "./components/Activity/WeedControlForm";
import { action as fertilizerAction } from "./components/Activity/FertilizerForm";
import { action as shipmentAction } from "./components/Activity/ShipmentForm";
import { action as salesAction } from "./components/Activity/SalesForm";
import { action as harvestingAction } from "./components/Activity/HarvestingForm";
import { action as pestControlAction } from "./components/Activity/PestControlForm";
// import { action as pestAction } from "./components/Activity/PestControlForm";
import { action as transportationAction } from "./components/Activity/TransportationForm";
import { action as storageAction } from "./components/Activity/StorageForm";
import { action as landPrepAction } from "./components/Activity/LandPreparationForm";
import { action as manipulateUserAction } from "./pages/Users";
import { action as loginAction } from "./pages/Login";
import { action as manipulateUser } from "./pages/NewUser";
import { action as logoutAction } from "./pages/Logout";
import { action as resetPasswordAction } from "./components/ResetPasswordForm";
import ViewHarvestingActivities, {
  loader as harvestingLoader,
} from "./pages/ViewHarvestingActivities";
import ViewStorageActivities from "./pages/ViewStorageActivities";

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
            path: ":userId",
            id: "user-detail",
            loader: () => new Promise((resolve) => resolve(null)), // to prevent loading when route is not found
            children: [
              {
                index: true,
                element: <h2>User details</h2>,
              },
              {
                path: "edit",
                element: <NewUser />,
              },
              {
                path: "reset-password",
                element: <ResetPasswordForm />,
                action: resetPasswordAction,
              },
            ],
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
                action: addFarmAction,
              },
            ],
          },
          {
            path: "new",
            element: <AddFarm />,
            action: addFarmAction,
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
            action: pestControlAction,
          },
          {
            path: "harvesting",
            element: <Harvesting />,
            action: harvestingAction,
          },
          {
            path: "storage",
            element: <Storage />,
            action: storageAction,
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
          {
            path: "land-preparation",
            element: <LandPreparationActivities />,
            action: landPrepAction,
          },
          {
            path: "transportation",
            element: <Transportation />,
            action: transportationAction,
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
            element: <ViewPrePlantingActivities />,
            loader: preplantingLoader,
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
            element: <ViewFertilizingActivities />,
            loader: fertilizerLoader,
          },
          {
            path: "pest-control",
            element: <ViewPestControlActivities />,
            loader: pestControlLoader,
          },
          {
            path: "harvesting",
            element: <ViewHarvestingActivities />,
            loader: harvestingLoader,
          },
          {
            path: "storage",
            element: <ViewStorageActivities />,
            loader: storageLoader,
          },
          {
            path: "sales",
            element: <ViewSalesActivities />,
            loader: salesLoader,
          },
          {
            path: "shipment",
            element: <ViewShipmentActivities />,
            loader: shipmentLoader,
          },
          {
            path: "land-preparation",
            element: <ViewLandPreparationActivities />,
            loader: landPreparationLoader,
          },
          {
            path: "transportation",
            element: <ViewTransportationActivities />,
            loader: transportationLoader,
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
