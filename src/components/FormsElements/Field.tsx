import InputField from "./InputField";

const Field = ({ type, ...rest }: any) => {
  return <>{type === "text" ? <InputField {...rest} /> : null}</>;
};

export default Field;
