import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import Logo from "./Logo";
import { useUserStore } from "../stores/UserStore";
import { ROUTES } from "../routes/routes";
import { useConfirmationModalStore } from "../stores/ConfirmationModalStore";
import { CiLogout } from "react-icons/ci";
import { useCloseConfirmationModal } from "../hooks/useCloseConfirmationModal";

const Header = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useUserStore();
  const { toggleConfirmationModal } = useConfirmationModalStore();
  const { handleCloseModal } = useCloseConfirmationModal();

  const handleNavigate = () => {
    setIsLoggedIn(false);
    navigate(ROUTES.LOGIN);
    handleCloseModal();
  };

  const handleLogout = () => {
    toggleConfirmationModal({
      isOpen: true,
      message: "Are you sure you want to logout?",
      modalType: "logout",
      onConfirm: handleNavigate,
      icon: <CiLogout size={34} color="var(--color-grey-dark)" />,
      confirmButtonText: "Logout",
    });
  };

  return (
    <div
      className="flex h-16 bg-white items-center justify-between px-4 py-2 sm:px-12 shadow-md mb-10 sticky top-0 z-10"
      data-testid="header"
    >
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
