import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Credits, Dashboard, Devices } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/devices",
    element: <Devices />,
  },
  {
    path: "/credits",
    element: <Credits />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
