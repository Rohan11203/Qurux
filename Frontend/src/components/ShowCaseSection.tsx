import { Avatar } from "@mui/material";
import { motion } from "framer-motion";
export const ShowCaseSection = () => {
  return (
    <div className="bg-[#fff7f5] p-4">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/3 hidden lg:block">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src="https://kinforce.net/qurux/wp-content/uploads/2021/05/flowers-and-eucaaliptus-composition-M9PL2FC.jpg"
            alt="Decorative"
          />
        </div>

        {/* Content Section */}
        <motion.div 
        initial={{ x: "-100%" }} // Start from left
        animate={{ x: "100%" }} // Move to right
        exit={{ x: "-100%" }} // Hide again to the left
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 10,
          ease: "easeInOut",
        }}
        className="p-4 text-center flex flex-col items-center justify-center flex-1">
          <Avatar />
          <h2 className="text-2xl font-lora mt-2">Mac Caffe</h2>
          <p className="text-xl text-[#f8b1b0] tracking-wide font-lora">
            Operation Manager
          </p>
          <p className="text-lg text-gray-700 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            numquam deserunt quasi, exercitationem provident maiores quisquam
            tenetur ipsa ipsam.
          </p>
        </motion.div>

        {/* Third Div */}
        <div className=""></div>
      </div>
    </div>
  );
};
