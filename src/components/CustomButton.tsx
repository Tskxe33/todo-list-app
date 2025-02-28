import { ReactNode } from "react";

interface Props {
  text: string;
  onClick: () => void;
  backgroundColor?: string;
  icon?: ReactNode;
  buttonClassName?: string;
}

const CustomButton = ({
  text,
  onClick,
  backgroundColor,
  icon,
  buttonClassName,
}: Props) => {
  const getBackgroundColor = () => {
    switch (backgroundColor) {
      case "primary":
        return "bg-primary hover:bg-primary/80";
      case "secondary":
        return "bg-secondary hover:bg-secondary/80";
      case "warning":
        return "bg-warning hover:bg-warning/80";
      case "danger":
        return "bg-danger hover:bg-danger/80";
      default:
        return "bg-primary hover:bg-primary/80";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-md  px-4 py-2 cursor-pointer transition-all duration-300 flex flex-row items-center gap-1 justify-center ${getBackgroundColor()} ${buttonClassName}`}
    >
      <p className="text-white font-semibold text-sm md:text-base">{text}</p>
      {icon}
    </button>
  );
};

export default CustomButton;
