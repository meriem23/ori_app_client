interface IPropsCalender {
  color?: string;
}

const Calendar = ({ color = "#fff" }: IPropsCalender) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="26"
      viewBox="0 0 22 26"
    >
      <text
        id="_"
        data-name=""
        transform="translate(0 22)"
        fill={color}
        fontSize="25"
        fontFamily="FontAwesome5Pro-Light, 'Font Awesome \35  Pro'"
        fontWeight="300"
      >
        <tspan x="0" y="0">
          
        </tspan>
      </text>
    </svg>
  );
};

export default Calendar;
