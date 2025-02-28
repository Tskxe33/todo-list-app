import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import { useUserStore } from "../stores/UserStore";

const AuthLayout = () => {
  const { isLoggedIn } = useUserStore();

  if (isLoggedIn) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return <Outlet />;
};

export default AuthLayout;
