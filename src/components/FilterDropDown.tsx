import { ReactNode, useEffect, useRef, useState } from "react";

type FilterItem = {
  name: string;
  key: string;
};

interface Props {
  buttonText: string;
  icon: ReactNode;
  items: FilterItem[];
  selected: string;
  setSelected: (selected: string) => void;
}

const FilterDropDown = ({
  buttonText,
  icon,
  items,
  selected,
  setSelected,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative inline-block text-left"
      ref={dropdownRef}
      data-testid="filter-dropdown"
    >
      <div
        className="flex flex-row items-center gap-1"
        onClick={() => setOpen(!open)}
      >
        {icon}
        <p data-testid="filter-button-text">{buttonText}</p>
      </div>
      {open && (
        <div className="absolute left-0 md:right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden">
          <div className="py-1" role="none">
            {items.map((item) => (
              <p
                className={`block px-4 py-2 text-sm text-gray-700 ${
                  selected === item.key ? "bg-gray-100" : ""
                }`}
                key={item.key}
                onClick={() => setSelected(item.key)}
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropDown;
