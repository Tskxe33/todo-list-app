import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import ErrorPage from "../pages/ErrorPage";
import DashboradPage from "../pages/DashBoardPage";
const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <DashboradPage />,
  },
  {
    path: ROUTES.DASHBOARD,
    element: <DashboradPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
