import React from "react";

interface PlusProps {
  className?: string;
}

function Plus({ className }: PlusProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill="none"
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="2"
        d="M7.667 14.333V7.667m0 0V1m0 6.667h6.666m-6.666 0H1"
      ></path>
    </svg>
  );
}

export default Plus;
