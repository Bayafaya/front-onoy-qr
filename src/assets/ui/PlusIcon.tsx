import React, { FC } from "react";

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
        stroke-width="5"
        stroke-linecap="round"
      />
      <path
        d="M3 15L27 15"
        stroke={color}
        stroke-width="5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default PlusIcon;
