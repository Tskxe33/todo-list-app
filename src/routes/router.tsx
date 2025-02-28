import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import ErrorPage from "../pages/ErrorPage";
import DashboradPage from "../pages/DashboardPage";
import MainLayout from "../layouts/MainLayout";
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.ROOT,
        element: <DashboradPage />,
        index: true,
      },
      {
        path: ROUTES.DASHBOARD,
        element: <DashboradPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
