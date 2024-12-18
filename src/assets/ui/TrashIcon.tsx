type TrashIconProps = {
  color?: string;
  width?: number;
  height?: number;
};

const TrashIcon = ({
  color = "#000000",
  width = 24,
  height = 24,
}: TrashIconProps) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 72.000000 72.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,72.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M247 667 c-10 -6 -21 -25 -25 -42 -7 -24 -14 -30 -42 -32 -47 -4 -60
-19 -60 -69 l0 -44 240 0 240 0 0 44 c0 50 -11 63 -59 68 -29 2 -36 8 -45 36
-6 18 -18 37 -26 42 -23 15 -203 12 -223 -3z m210 -42 c9 -26 -4 -30 -97 -30
-93 0 -106 4 -97 30 9 22 185 22 194 0z"
        />
        <path
          d="M160 265 c0 -241 -14 -225 200 -225 214 0 200 -16 200 225 l0 185
-200 0 -200 0 0 -185z m105 -16 c0 -130 -2 -154 -15 -154 -13 0 -15 24 -18
145 -3 151 0 174 21 167 9 -3 12 -43 12 -158z m110 0 c0 -130 -2 -154 -15
-154 -13 0 -15 24 -18 145 -3 151 0 174 21 167 9 -3 12 -43 12 -158z m110 0
c0 -130 -2 -154 -15 -154 -13 0 -15 24 -18 145 -3 151 0 174 21 167 9 -3 12
-43 12 -158z"
        />
      </g>
    </svg>
  );
};

export default TrashIcon;
