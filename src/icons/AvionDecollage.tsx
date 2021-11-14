interface IPropsDecollage {
  color?: string;
  width?: string;
  height?: string;
}

export default function AvionDecollage({
  color = "#000",
  width = "27",
  height = "21",
}: IPropsDecollage) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 27 21"
    >
      <text
        id="_"
        fill={color}
        data-name=""
        transform="translate(1 18)"
        fontSize="20"
        fontFamily="FontAwesome5Pro-Regular, 'Font Awesome \35  Pro'"
      >
        <tspan x="0" y="0">
          
        </tspan>
      </text>
    </svg>
  );
}
