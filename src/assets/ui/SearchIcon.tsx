import React, { FC } from "react";
type SearchIconProps = {
  color?: string;
  width?: number;
  height?: number;
};
const SearchIcon: FC<SearchIconProps> = ({ color = "#000000", width = "24", height = "24" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 71 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="28.4985"
        cy="28.4936"
        r="24.7648"
        stroke={color}
        strokeWidth="6.4205"
      />
      <path
        d="M64.7322 69.3103C65.9859 70.5639 68.0185 70.5639 69.2722 69.3103C70.5259 68.0566 70.5259 66.024 69.2722 64.7703L64.7322 69.3103ZM43.6363 48.2143L64.7322 69.3103L69.2722 64.7703L48.1762 43.6743L43.6363 48.2143Z"
        fill={color}
      />
    </svg>
  );
};

export default SearchIcon;
