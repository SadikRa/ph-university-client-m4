import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import AdminLayout from "../components/layout/AdminLayout";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";
import Login from "../pages/Login";

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
    children: routeGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <AdminLayout></AdminLayout>,
    children: routeGenerator(studentPaths),
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
