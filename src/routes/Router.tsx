import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminLayout from "../components/layout/AdminLayout";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },

  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <AdminLayout></AdminLayout>,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/student",
    element: <AdminLayout></AdminLayout>,
    children: routeGenerator(adminPaths),
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
