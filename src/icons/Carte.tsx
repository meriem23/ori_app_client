import React from "react";

function Carte({ color = "#c09a3e" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="26"
      viewBox="0 0 30 26"
    >
      <text
        id="_"
        data-name=""
        transform="translate(0 23)"
        fill={color}
        fontSize="26"
        fontFamily="FontAwesome5Pro-Light, 'Font Awesome \35  Pro'"
        fontWeight="300"
      >
        <tspan x="0" y="0">
          
        </tspan>
      </text>
    </svg>
  );
}

export default Carte;
