import React from "react";

export default function File({ color = "#c09a3e" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="29"
      viewBox="0 0 21 29"
    >
      <text
        id="File"
        transform="translate(0 25)"
        fill={color}
        fontSize="28"
        fontFamily="FontAwesome5Pro-Light, 'Font Awesome \35  Pro'"
        fontWeight="300"
      >
        <tspan x="0" y="0">
          File
        </tspan>
      </text>
    </svg>
  );
}
