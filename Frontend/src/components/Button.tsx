interface ButtonProps {
  title: string;
  varient: "primary" | "green" | "purple" | "yellow" | "red" | "blue";
  className?: string;
  size: "sm" | "md" | "lg";
}

const Size = {
  sm: "",
  md: "text-lg w-36  py-2",
  lg: "md:p-4 lg:p-4 lg:ml-0 ml-4 p-3 rounded-xl text-lg font-serif",
};

const VarientStyles = {
  primary: "bg-[var(--secondary-color)] hover:bg-[#fbd1d0]",
  green: "bg-[#bcd69b] hover:bg-[#f6fbef] hover:text-[#bcd69b]",
  purple: "bg-[#e4aed1] hover:bg-white hover:text-[#e4aed1]",
  yellow: "bg-[#efdba2] hover:bg-[#fcf8ec] hover:text-[#efdba2]",
  red: "bg-[#f8b1b0] hover:bg-white hover:text-[#f8b1b0]",
  blue: "bg-[#a8d9d9] hover:bg-[#f2fcfc] hover:text-[#a8d9d9]",
};
export const Button = (props: ButtonProps) => {
  return (
    <div
      className={`${props.className} ${
        Size[props.size]
      } transition-all duration-300 ${
        VarientStyles[props.varient]
      } border text-center rounded-2xl text-white   cursor-pointer`}
    >
      {props.title}
    </div>
  );
};
