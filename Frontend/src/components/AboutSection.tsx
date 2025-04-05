import { Button } from "./Button";
import { motion } from "framer-motion";
export const AboutSection = () => {
  return (
    <div className="bg-white sm:pt-20 pt-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="relative md:w-1/2 w-full flex justify-center"
          >
            <motion.div 
            initial={{ opacity: 0, y: -50, x: -40, rotate: -10 }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-[50%] left-[80%] transform -translate-x-1/2 -translate-y-1/2">
              <img
                src="https://kinforce.net/qurux/wp-content/uploads/2021/05/elements-set-of-natural-and-floral-elements-G9XCU6B_about.png"
                className="max-w-24 sm:max-w-32 md:max-w-40 lg:max-w-48"
                alt="Decorative Element"
              />
            </motion.div>
            <img
              src="https://kinforce.net/qurux/wp-content/uploads/2021/05/woman-spa-mask-half-face-beauty-concept-healthy-po-XSNKXZR.png"
              className="max-w-full h-auto"
              alt="Woman Spa"
            />
          </motion.div>

          <div className="md:w-1/2 w-full p-6 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="text-5xl font-grechen text-[#f8b1b0]"
            >
              About Us
            </motion.div>
            <h1 className="text-3xl sm:text-4xl pt-2 font-lora">
              Welcome to Our Qurux Clinic
            </h1>
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1,ease: "circInOut" }}
            viewport={{ once: true }}
            >
              <p className="text-lg pt-6 font-light">
                Mauris cursus posuere sem non fermentum donec condimentum, nibh
                ut viverra molestie, urna dui convallis tortor, sed dignissim
                arcu ex sed mauris quisque at libero ac.
              </p>
              <p className="text-lg pt-4 font-light">
                Phasellus placerat feugiat ante, eget efficitur eros dapibus
                fusce a urna non dolor pellentesque consequat vitae felis.
              </p>
            </motion.div>
            <div className="flex justify-center">
              <Button
                varient="primary"
                className="mt-8 px-6 py-3"
                title="Know More"
                size="md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
