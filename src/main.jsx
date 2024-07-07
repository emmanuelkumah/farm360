import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Dashboard, Farmers, User, Farms, Reports } from "./pages";
import { ContextProvider } from "./context/ContextProvider";
import { LoadingIndicator } from "@syncfusion/ej2-react-grids";

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
        path: "/app/dashboard",
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
        path: "/app/reports",
        element: <Reports />,
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
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
