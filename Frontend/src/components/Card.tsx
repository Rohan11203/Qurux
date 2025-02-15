import { Button } from "./Button";

interface CardProps {
  ImageLink: string;
  title: string;
  description: string;
  varient: "green" | "purple" | "yellow" | "red" | "blue";
  ImageBackGround: "white" | "purple" | "red";
}

const VarientStyles = {
    green: "bg-[#f6fbef]",
    purple: "bg-[#ffffff]",
    yellow: "bg-[#fcf8ec]",
    red : "bg-white",
    blue : "bg-[#f2fcfc]"
}

const ImageBackGroundStyles = {
    white: "bg-white",
    purple: "bg-[#fff9fd]",
    red : "bg-[#fff7f7]",
}

export const Card = (props: CardProps) => {
  return (
    <div className={`${VarientStyles[props.varient]} relative flex flex-col  p-12 justify-center items-center max-w-lg border md:boder-b`}>
        <div className="absolute top-0 left-0  scale-y-[-1] scale-x-[-1]">
        <img 
            src="https://kinforce.net/qurux/wp-content/uploads/2021/05/elements-set-of-natural-and-floral-elements-G9XCU6B_violet.png" 
            alt="Decorative Element"
        />
    </div>
      <div className={`${ImageBackGroundStyles[props.ImageBackGround]} w-44 h-44 rounded-full  border flex items-center justify-center`}>
        
        <div className="">
          <img  src={props.ImageLink} />
        </div>
      </div>
      <h1 className="text-2xl py-10  font-serif max-w-xs truncate">{props.title}</h1>
      <div className=" text-lg  gap-2">
        <div className="text-center">{props.description}</div>
      </div>
      <Button varient={props.varient} size="md" title="Read More" className="mt-10"/>
      {/* <div className="bg-[#bcd69b] text-lg w-36  py-2 text-center rounded-3xl mt-10 text-white font-lora cursor-pointer">
        Read More
      </div> */}
    </div>
  );
};
