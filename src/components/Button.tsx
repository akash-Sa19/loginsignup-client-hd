type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  isDisabled?: boolean;
  label: String;
  classname?: String;
  destination?: any;
};

const Button = ({
  type,
  isDisabled,
  label,
  classname,
  destination,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${
        classname
          ? classname
          : "w-full mt-4 bg-purple-800 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors font-bold"
      }`}
      disabled={isDisabled}
      onClick={() => {
        if (!isDisabled && type === "button") {
          destination();
        }
      }}
    >
      {label}
    </button>
  );
};

export default Button;
