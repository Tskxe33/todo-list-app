import { FaListCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface Props {
  iconSize?: string;
  textSize?: string;
}

const Logo = ({
  iconSize = "h-7 w-7 sm:h-10 sm:w-10",
  textSize = "text-base sm:text-3xl",
}: Props) => {
  return (
    <div className="flex items-center gap-2 sm:gap-5">
      <Link to="/">
        <FaListCheck className={`${iconSize} text-primary`} />
      </Link>
      <h2 className={`${textSize} font-extralight text-primary`}>
        To-Do List App
      </h2>
    </div>
  );
};

export default Logo;
