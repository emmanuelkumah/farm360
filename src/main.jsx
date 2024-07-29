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
  Collectors,
  Traceability,
  FarmActivity,
  Landing,
} from "./pages";
import { ContextProvider } from "./context/ContextProvider";
import FarmersProvider from "./context/FarmersProvider";
import TraaceabilityProvider from "./context/TraaceabilityProvider";
// import AuthProvider from "./context/AuthProvider";
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
        path: "/app/farmers",
        element: <Farmers />,
      },
      {
        path: "/app/farms/",
        element: <Farms />,
      },
      {
        path: "/app/farms/:farmId",
        element: <FarmActivity />,
      },
      {
        path: "/app/management",
        element: <FarmManagement />,
      },
      {
        path: "/app/management/:farmID",
        element: "Farm activities",
      },
      {
        path: "/app/collectors",
        element: <Collectors />,
      },
      {
        path: "/app/reports",
        element: <Reports />,
      },
      {
        path: "/app/users",
        element: <Users />,
      },
      {
        path: "/app/traceability",
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
