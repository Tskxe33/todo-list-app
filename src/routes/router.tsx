import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import ErrorPage from "../pages/ErrorPage";
import DashboradPage from "../pages/DashboardPage";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/auth/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
        index: true,
      },
    ],
  },
  {
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: ROUTES.ROOT,
        element: <DashboradPage />,
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
