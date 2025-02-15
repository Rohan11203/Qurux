import { motion } from "framer-motion"
import { Button } from "./Button"
import { Video } from "lucide-react"
export const HeroSection = () => {
  return (
    <div className="relative h-full w-full ">
            <div className="absolute hidden sm:block inset-0 h-full w-full bg-contain bg-center sm:mt-0 mt-20 bg-no-repeat md:bg-contain lg:bg-cover bg-[url('https://kinforce.net/qurux/wp-content/uploads/2021/05/beautiful-woman-with-perfect-body-and-legs-UVPL9FD.jpg')]"></div>
    
            <motion.div
              initial={{ opacity: 0, y: -50, x: -50, rotate: -10 }}
              animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-[2rem] left-[-6rem] scale-x-[-1]"
            >
              <img src="https://kinforce.net/qurux/wp-content/uploads/2021/05/elements-set-of-natural-and-floral-elements-G9XCU6B.png" />
            </motion.div>
    
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-10 sm:inset-16 md:inset:24 lg:inset-56  lg:max-w-2xl max-w-full"
            >
              <div className="text-2xl lg:text-start text-start pt-6 sm:text-3xl  md:text-4xl font-medium font-lora lg-text-5xl">
                Dermatology & Skin Care
              </div>
              <p className="md:text-md  lg:text-start sm:text-lg  md:text-xl lg:mt-6 md:mt-6 sm:mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum
                ultrice eros mauris, id pharetra odio convallis non suspendisse.
              </p>
    
              <div className="flex flex-wrap sm:justify-start items-center mt-6 sm:mt-8 gap-4 sm:gap-6">
                <Button varient="primary" title="BOOK AN APPOINTMENT" size="lg" />
    
                {/* <div className="cursor-pointer bg-[#f8b1b0] p-4 rounded-xl text-lg text-center  text-white font-serif">
                  BOOK AN APPOINTMENT
                </div> */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, ease: "backOut", delay: 0.2 }}
                  className="font-serif bg-white p-2 rounded-full border hidden sm:block"
                >
                  <div className=" cursor-pointer border border-[#f6c7c5] rounded-full ">
                    <Video height={40} width={40} className="p-2" />
                  </div>
                </motion.div>

                <div className="absolute block sm:hidden inset-0 h-full w-full bg-contain bg-center mt-20 bg-no-repeat bg-[url('https://kinforce.net/qurux/wp-content/uploads/2021/05/beautiful-woman-with-perfect-body-and-legs-UVPL9FD.jpg')]"></div>   
                
    
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  className="cursor-pointer font-serif text-lg sm:text-xl hidden md:block"
                >
                  WATCH VIDEO
                </motion.div>
              </div>
            </motion.div>
          </div>
  )
}