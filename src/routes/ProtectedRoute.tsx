import { Navigate } from "react-router-dom";
import { useUserStore } from "../stores/UserStore";
import { ROUTES } from "./routes";
import { PropsWithChildren } from "react";

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { isLoggedIn } = useUserStore();

  if (!isLoggedIn) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return children;
};

export default ProtectedRoute;
