import { FC } from "react";

type MinusIconProps = {
    color?: string;
    width?: number;
    height?: number;
  };

const MinusIcon: FC<MinusIconProps> = ({
    color = "#434343",
    width = "30",
    height = "30",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3L27 3"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MinusIcon;
