import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root";
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
} from "./pages";
import { ContextProvider } from "./context/ContextProvider";
import FarmersProvider from "./context/FarmersProvider";

import AuthProvider from "./context/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        path: "/app",
        element: <Dashboard />,
      },
      {
        path: "/app/farmers",
        element: <Farmers />,
      },
      {
        path: "/app/farms",
        element: <Farms />,
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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <FarmersProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </FarmersProvider>
    </ContextProvider>
  </React.StrictMode>
);
