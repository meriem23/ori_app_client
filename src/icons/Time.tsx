const Time = ({ color = "#b0b0b0", dimension = "16" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 16 16"
    >
      <text
        id="_"
        data-name=""
        transform="translate(0 14)"
        fill={color}
        fontSize="16"
        fontFamily="FontAwesome5Pro-Light, 'Font Awesome \35  Pro'"
        fontWeight="300"
      >
        <tspan x="0" y="0">
          
        </tspan>
      </text>
    </svg>
  );
};

export default Time;
