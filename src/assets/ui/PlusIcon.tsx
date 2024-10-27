import { FC } from "react";

type PlusIconProps = {
  color?: string;
  width?: number;
  height?: number;
};

const PlusIcon: FC<PlusIconProps> = ({
  color = "#434343",
  width = "30",
  height = "30",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 3L15 27"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M3 15L27 15"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PlusIcon;
