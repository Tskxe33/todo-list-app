import { FaListCheck } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-16 bg-white items-center justify-between px-4 sm:px-12 shadow-md mb-10">
      <div className="flex items-center gap-2 sm:gap-5">
        <Link to="/">
          <FaListCheck className="h-7 w-7 sm:h-10 sm:w-10 text-primary" />
        </Link>
        <h2 className="text-base sm:text-3xl font-extralight text-primary">
          To-Do List App
        </h2>
      </div>
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
