import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { EmployeesProvider } from "./data/repositories/employees";
import "./index.css";
import { Home, EmployeeList, ProductList } from "./pages";
import UIWrapper from "./UIWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UIWrapper />,
    children: [{
      path: "",
      element: <Home />,
    },
    {
      path: "employees",
      element: <EmployeeList />
    },
    {
      path: "products",
      element: <ProductList />
    }]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EmployeesProvider>
      <RouterProvider router={router} />
    </EmployeesProvider>
  </React.StrictMode >
);