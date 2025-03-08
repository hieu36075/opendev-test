import { DotProps } from "./type";

const Dot = ({ isActive, ...props }: DotProps) => {
  return (
    <div
      className={`flex w-4 h-4 items-center justify-center cursor-pointer ${
        isActive ? "border border-white " : ""
      }rounded-full bg-transparent`}
      {...props}
    >
      <span
        className={`w-3 h-3 border border-white rounded-full ${
          isActive ? "bg-white" : "bg-transparent"
        }`}
      ></span>
    </div>
  );
};

export default Dot;
