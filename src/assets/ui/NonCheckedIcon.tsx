import { SVGProps } from "../../interfaces/SVGProps";


const NonCheckedIcon = ({ width, height, color }: SVGProps) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width || 18}
      height={height || 18}
      viewBox="0 0 132.000000 132.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,132.000000) scale(0.100000,-0.100000)"
        fill={color || "#000000"}
        stroke="none"
      >
        <path
          d="M148 1310 c-51 -15 -94 -49 -118 -92 l-25 -43 0 -515 0 -515 27 -45
    c16 -28 43 -55 70 -70 l43 -25 515 0 515 0 43 25 c27 15 54 42 70 70 l27 45 0
    515 0 515 -25 43 c-15 27 -42 54 -70 70 l-45 27 -500 2 c-275 1 -512 -2 -527
    -7z m1000 -162 c17 -17 17 -959 0 -976 -17 -17 -959 -17 -976 0 -17 17 -17
    959 0 976 17 17 959 17 976 0z"
        />
      </g>
    </svg>
  );
};

export default NonCheckedIcon;
