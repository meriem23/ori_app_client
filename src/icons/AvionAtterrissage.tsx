interface IPropsAterrissage {
  color?: string;
  width?: string;
  height?: string;
}

export default function AvionAtterrissage({
  color = "#000",
  width = "25",
  height = "21",
}: IPropsAterrissage) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 25 21"
    >
      <text
        id="_"
        fill={color}
        data-name=""
        transform="translate(0 18)"
        fontSize="20"
        fontFamily="FontAwesome5Pro-Regular, 'Font Awesome \35  Pro'"
      >
        <tspan x="0" y="0">
          
        </tspan>
      </text>
    </svg>
  );
}
