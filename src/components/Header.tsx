import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import Logo from "./Logo";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-16 bg-white items-center justify-between px-4 sm:px-12 shadow-md mb-10">
      <Logo />
      <div className="flex items-center gap-2">
        <CustomButton
          text="Logout"
          onClick={() => {
            navigate("/login");
          }}
          backgroundColor="transparent"
          buttonClassName="border border-primary"
          textColor="primary"
        />
      </div>
    </div>
  );
};

export default Header;
