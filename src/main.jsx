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
  PestControlActivities,
  Login,
  Error,
  NewUser,
  EditUser,
  AddWeedControlActivity,
  AddFertilizerActivity,
  AddPestControlActivity,
  AddStorageActivity,
  ViewActivities,
  EditPreplantingActivity,
  EditWeedControlActivity,
  AddPrePlantingActivity,
  AddHarvestingActivity,
  AddLandPreparationActivity,
  AddSalesActivity,
  AddShipmentActivity,
  EditLandPreparationActivity,
  EditPestControlActivity,
  EditPlantingActivity,
  EditHarvestingActivity,
  AddPlantingActivity,
  EditFertilizerActivity,
  EditStorageActivity,
  EditSalesActivity,
  EditShipmentActivity,
  EditTransportationActivity,
  AddTransportationActivity,
} from "./pages";

import HomeLayout from "./routes/HomeLayout";

import { loader as farmerDetails } from "./pages/ViewFarmer";
import { loader as farmDetailsLoader } from "./pages/ViewFarm";
import { loader as storageLoader } from "./pages/ViewStorageActivities";
import { loader as loadPreplantingData } from "./pages/EditPreplantingActivity";
import { loader as loadWeedControlData } from "./pages/EditWeedControlActivity";
import { loader as loadLandPreparationData } from "./pages/EditLandPreparationActivity";
import { loader as loadPlantingData } from "./pages/EditPlantingActivity";
import { loader as loadFertilizerData } from "./pages/EditFertilizerActivity";
import { loader as loadPestControlData } from "./pages/EditPestControlActivity";
import { loader as loadHarvestingData } from "./pages/EditHarvestingActivity";
import { loader as loadStorageData } from "./pages/EditStorageActivity";
import { loader as loadSalesData } from "./pages/EditSalesActivity";
import { loader as loadShipmentData } from "./pages/EditShipmentActivity";
import { loader as loadTransportationData } from "./pages/EditTransportationActivity";
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
import { action as editWeedControlAction } from "./components/Activity/WeedControlForm";
import { action as fertilizerAction } from "./components/Activity/FertilizerForm";
import { action as shipmentAction } from "./components/Activity/ShipmentForm";
import { action as salesAction } from "./components/Activity/SalesForm";
import { action as harvestingAction } from "./components/Activity/HarvestingForm";
import { action as pestControlAction } from "./components/Activity/PestControlForm";
import { action as editPreplantingAction } from "./components/Activity/PrePlantingForm";
import { action as transportationAction } from "./components/Activity/TransportationForm";
import { action as storageAction } from "./components/Activity/StorageForm";
import { action as landPrepAction } from "./components/Activity/LandPreparationForm";
import { action as editLandPreparationAction } from "./components/Activity/LandPreparationForm";
import { action as editPlantingAction } from "./components/Activity/PlantingForm";
import { action as editFertilizerActivity } from "./components/Activity/FertilizerForm";
import { action as editPestControlAction } from "./components/Activity/PestControlForm";
import { action as editStorageAction } from "./components/Activity/StorageForm";
import { action as editSalesAction } from "./components/Activity/SalesForm";
import { action as editHarvestingAction } from "./components/Activity/HarvestingForm";
import { action as editShipmentAction } from "./components/Activity/ShipmentForm";
import { action as editTransportationAction } from "./components/Activity/TransportationForm";
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
            element: <AddPrePlantingActivity />,
            action: preplantingAction,
          },
          {
            path: "planting",
            element: <AddPlantingActivity />,
            action: plangtingAction,
          },
          {
            path: "weed-control",
            element: <AddWeedControlActivity />,
            action: weedControlAction,
          },
          {
            path: "fertilizing",
            element: <AddFertilizerActivity />,
            action: fertilizerAction,
          },
          {
            path: "pest-control",
            element: <AddPestControlActivity />,
            action: pestControlAction,
          },
          {
            path: "harvesting",
            element: <AddHarvestingActivity />,
            action: harvestingAction,
          },
          {
            path: "storage",
            element: <AddStorageActivity />,
            action: storageAction,
          },
          {
            path: "sales",
            element: <AddSalesActivity />,
            action: salesAction,
          },
          {
            path: "shipment",
            element: <AddShipmentActivity />,
            action: shipmentAction,
          },
          {
            path: "land-preparation",
            element: <AddLandPreparationActivity />,
            action: landPrepAction,
          },
          {
            path: "transportation",
            element: <AddTransportationActivity />,
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
            children: [
              {
                index: true,
                element: <ViewPrePlantingActivities />,
                loader: preplantingLoader,
              },
              {
                path: "edit/:activityId",
                element: <EditPreplantingActivity />,
                loader: loadPreplantingData,
                action: editPreplantingAction,
              },
            ],
          },
          {
            path: "planting",
            children: [
              {
                index: true,
                element: <ViewPlantingActivities />,
                loader: PlantingLoader,
              },
              {
                path: "edit/:activityId",
                element: <EditPlantingActivity />,
                loader: loadPlantingData,
                action: editPlantingAction,
              },
            ],
          },
          {
            path: "weed-control",
            children: [
              {
                index: true,
                element: <ViewWeedControlActivities />,
                loader: weedControlLoader,
              },
              {
                path: "edit/:activityId",
                element: <EditWeedControlActivity />,
                loader: loadWeedControlData,
                action: editWeedControlAction,
              },
            ],
          },
          {
            path: "land-preparation",
            children: [
              {
                index: true,
                element: <ViewLandPreparationActivities />,
                loader: landPreparationLoader,
              },
              {
                path: "edit/:activityId",
                element: <EditLandPreparationActivity />,
                loader: loadLandPreparationData,
                action: editLandPreparationAction,
              },
            ],
          },
          {
            path: "fertilizing",
            children: [
              {
                index: true,
                element: <ViewFertilizingActivities />,
                loader: fertilizerLoader,
              },
              {
                path: "edit/:activityId",
                element: <EditFertilizerActivity />,
                loader: loadFertilizerData,
                action: editFertilizerActivity,
              },
            ],
          },
          {
            path: "pest-control",
            children: [
              {
                index: true,
                element: <ViewPestControlActivities />,
                loader: pestControlLoader,
              },
              {
                path: "edit/:activityId",
                element: <EditPestControlActivity />,
                loader: loadPestControlData,
                action: editPestControlAction,
              },
            ],
          },
          {
            path: "harvesting",
            children: [
              {
                index: true,
                element: <ViewHarvestingActivities />,
                loader: harvestingLoader,
              },
              {
                path: "edit/:activityId",
                element: <EditHarvestingActivity />,
                loader: loadHarvestingData,
                action: editHarvestingAction,
              },
            ],
          },
          {
            path: "storage",
            children: [
              {
                index: true,
                element: <ViewStorageActivities />,
                loader: storageLoader,
              },
              {
                path: "edit/:activityId",
                element: <EditStorageActivity />,
                loader: loadStorageData,
                action: editStorageAction,
              },
            ],
          },
          {
            path: "sales",
            children: [
              {
                index: true,
                element: <ViewSalesActivities />,
                loader: salesLoader,
              },
              {
                path: "edit/:activityId",
                element: <EditSalesActivity />,
                loader: loadSalesData,
                action: editSalesAction,
              },
            ],
          },
          {
            path: "shipment",
            children: [
              {
                index: true,
                element: <ViewShipmentActivities />,
                loader: shipmentLoader,
              },
              {
                path: "edit/:activityId",
                element: <EditShipmentActivity />,
                loader: loadShipmentData,
                action: editShipmentAction,
              },
            ],
          },

          {
            path: "transportation",
            children: [
              {
                index: true,
                element: <ViewTransportationActivities />,
                loader: transportationLoader,
              },
              {
                path: "edit/:activityId",
                element: <EditTransportationActivity />,
                loader: loadTransportationData,
                action: editTransportationAction,
              },
            ],
          },
        ],
      },

      // {
      //   path: "farms/:activityId/edit",
      //   children: [
      //     {
      //       index: true,
      //       element: <FarmActivities />,
      //     },
      //     {
      //       path: "pre-planting",
      //       element: <PrePlanting />,
      //       loader: preplanting,
      //       // loader: preplantingLoader,
      //       // action: preplantingAction,
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
