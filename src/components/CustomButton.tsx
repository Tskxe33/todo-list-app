import { ReactNode } from "react";
import { getBackgroundColor } from "../utils/Styles";
import { getTextColor } from "../utils/Styles";

interface Props {
  text: string;
  onClick: () => void;
  backgroundColor?: string;
  textColor?: string;
  icon?: ReactNode;
  buttonClassName?: string;
  textClassName?: string;
  disabled?: boolean;
}

const CustomButton = ({
  text,
  onClick,
  backgroundColor,
  icon,
  buttonClassName,
  textColor,
  textClassName,
  disabled,
}: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`h-10 rounded-md px-4 py-2 cursor-pointer transition-all duration-300 flex flex-row items-center gap-1 justify-center ${getBackgroundColor(
        backgroundColor ?? "primary"
      )} ${buttonClassName} ${disabled && "opacity-50"}`}
    >
      <p
        className={`font-semibold text-sm md:text-base ${getTextColor(
          textColor ?? "white"
        )} ${textClassName}`}
      >
        {text}
      </p>
      {icon}
    </button>
  );
};

export default CustomButton;
