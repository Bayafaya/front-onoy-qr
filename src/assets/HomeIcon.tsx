interface Props {
  stroke?: string;
}
export default function HomeIcon({ stroke }: Props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_545_18209)">
        <path
          d="M14.1665 8.33335H15.8332C17.4998 8.33335 18.3332 7.50002 18.3332 5.83335V4.16669C18.3332 2.50002 17.4998 1.66669 15.8332 1.66669H14.1665C12.4998 1.66669 11.6665 2.50002 11.6665 4.16669V5.83335C11.6665 7.50002 12.4998 8.33335 14.1665 8.33335Z"
          stroke={stroke}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.1665 18.3334H5.83317C7.49984 18.3334 8.33317 17.5 8.33317 15.8334V14.1667C8.33317 12.5 7.49984 11.6667 5.83317 11.6667H4.1665C2.49984 11.6667 1.6665 12.5 1.6665 14.1667V15.8334C1.6665 17.5 2.49984 18.3334 4.1665 18.3334Z"
          stroke={stroke}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.99984 8.33335C6.84079 8.33335 8.33317 6.84097 8.33317 5.00002C8.33317 3.15907 6.84079 1.66669 4.99984 1.66669C3.15889 1.66669 1.6665 3.15907 1.6665 5.00002C1.6665 6.84097 3.15889 8.33335 4.99984 8.33335Z"
          stroke={stroke}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.9998 18.3334C16.8408 18.3334 18.3332 16.8409 18.3332 15C18.3332 13.1591 16.8408 11.6667 14.9998 11.6667C13.1589 11.6667 11.6665 13.1591 11.6665 15C11.6665 16.8409 13.1589 18.3334 14.9998 18.3334Z"
          stroke={stroke}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_545_18209">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
