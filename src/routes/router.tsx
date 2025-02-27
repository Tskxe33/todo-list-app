import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import DashboradPage from "../pages/DashboradPage";
import ErrorPage from "../pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: ROUTES.DASHBOARD,
    element: <DashboradPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
