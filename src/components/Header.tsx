import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import Logo from "./Logo";
import { useUserStore } from "../stores/UserStore";
import { ROUTES } from "../routes/routes";

const Header = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useUserStore();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate(ROUTES.LOGIN);
  };

  return (
    <div className="flex h-16 bg-white items-center justify-between px-4 py-2 sm:px-12 shadow-md mb-10 sticky top-0 z-10">
      <Logo />
      <div className="flex items-center gap-2">
        <CustomButton
          text="Logout"
          onClick={handleLogout}
          backgroundColor="transparent"
          buttonClassName="border border-primary"
          textColor="primary"
        />
      </div>
    </div>
  );
};

export default Header;
