import React, { FC } from "react";

type FoodIconProps = {
  color?: string;
  width?: number;
  height?: number;
};
const FoodIcon: FC<FoodIconProps> = ({
  color = "#000000",
  width = "24",
  height = "24",
}) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M1993 4188 c-139 -139 -253 -257 -253 -263 0 -5 6 -18 14 -27 12 -16
15 -16 57 5 74 36 170 23 233 -32 10 -9 81 -107 159 -219 77 -111 141 -201
142 -200 2 2 -8 75 -21 163 -14 88 -22 177 -19 198 8 56 38 110 83 148 l40 34
-63 209 c-60 199 -77 236 -109 236 -6 0 -124 -114 -263 -252z"
        />
        <path
          d="M1288 4213 c-11 -3 -74 -116 -173 -309 -86 -168 -155 -307 -153 -309
2 -2 84 30 183 72 148 63 192 77 245 80 83 6 141 -22 186 -89 l31 -46 28 59
29 59 -31 42 c-16 24 -91 131 -166 239 -75 108 -142 199 -149 201 -7 2 -21 3
-30 1z"
        />
        <path
          d="M3247 3992 l-187 -187 172 -71 173 -71 50 66 c27 36 67 83 89 104
l39 39 -43 141 c-23 78 -46 148 -52 154 -26 32 -55 11 -241 -175z"
        />
        <path
          d="M2486 3818 c-13 -21 -10 -58 33 -358 l48 -335 74 -112 74 -111 60 -1
c57 -1 62 1 78 28 9 16 111 153 227 305 115 152 210 280 210 284 0 9 -750 322
-773 322 -9 0 -23 -10 -31 -22z"
        />
        <path
          d="M4365 3629 c-181 -76 -334 -140 -339 -142 -5 -2 51 -134 124 -295
l133 -292 192 0 193 0 5 33 c3 17 23 207 44 420 37 382 37 389 18 403 -10 8
-24 14 -29 13 -6 0 -159 -63 -341 -140z"
        />
        <path
          d="M1797 3608 c-171 -328 -358 -700 -354 -704 2 -2 243 -3 536 -2 l532
3 -292 423 c-268 387 -294 422 -320 422 -26 0 -33 -10 -102 -142z"
        />
        <path
          d="M3359 3320 c-167 -220 -305 -405 -307 -410 -2 -6 184 -10 517 -10
287 0 521 3 521 8 -1 4 -83 187 -183 407 -179 390 -184 400 -213 403 -29 3
-43 -14 -335 -398z"
        />
        <path
          d="M865 3366 c-280 -118 -514 -220 -519 -228 -21 -34 3 -64 122 -151
l119 -87 329 0 329 0 82 163 81 162 22 157 c24 174 21 198 -28 198 -15 -1
-256 -97 -537 -214z"
        />
        <path
          d="M232 2710 c-53 -33 -67 -78 -53 -180 55 -396 190 -788 376 -1089 201
-326 531 -614 805 -705 166 -55 195 -56 1195 -56 975 0 1038 3 1180 47 292 91
636 391 843 735 179 299 310 683 363 1068 14 102 0 147 -53 180 -33 20 -44 20
-2328 20 -2284 0 -2295 0 -2328 -20z m4348 -260 c45 -45 33 -112 -25 -135 -52
-22 -3938 -22 -3990 0 -58 23 -70 90 -25 135 20 20 42 20 2020 20 1978 0 2000
0 2020 -20z"
        />
      </g>
    </svg>
  );
};

export default FoodIcon;
