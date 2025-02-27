import { ReactNode } from "react";

interface Props {
  text: string;
  onClick: () => void;
  backgroundColor?: string;
  icon?: ReactNode;
}

const CustomButton = ({ text, onClick, backgroundColor, icon }: Props) => {
  const bgColor = `bg-${backgroundColor || "primary"}`;
  const hoverColor = `hover:bg-${backgroundColor || "primary/80"}`;

  return (
    <button
      onClick={onClick}
      className={`rounded-md  px-4 py-2 cursor-pointer ${bgColor} ${hoverColor} transition-all duration-300 flex flex-row items-center gap-1`}
    >
      <p className="text-white font-semibold text-sm md:text-base">{text}</p>
      {icon}
    </button>
  );
};

export default CustomButton;
