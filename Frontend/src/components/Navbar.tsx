import { Calendar, Circle, X } from "lucide-react";
import { MenuIcon } from "../Icons/MenuIcon";
import { motion,AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="bg-white w-full container mx-auto  mt-10 max-w-screen-xl rounded-3xl p-4 sm:p-6"
      >
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 text-2xl font-semibold">
            <Circle fill="#fbd1d0" className="h-10 w-10" />
            <span>QurRux</span>
          </div>

          {/* Navigation & Actions */}
          <div className="flex items-center space-x-4">
            {/* Desktop Links */}
            <nav className="hidden lg:flex space-x-6 text-lg font-medium font-serif">
              <a
                href="#home"
                className="text-[#fbd1d0] hover:text-pink-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-pink-400 transition-colors"
              >
                About
              </a>
              <a
                href="#service"
                className="hover:text-pink-400 transition-colors"
              >
                Service
              </a>
              <a
                href="#procedure"
                className="hover:text-pink-400 transition-colors"
              >
                Procedures
              </a>
             
              <a href="#" className="hover:text-pink-400 transition-colors">
                Blog
              </a>
              <a
                href="#contact"
                className="hover:text-pink-400 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center h-10 w-10 rounded-full bg-[#f8bcbc] text-white focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <MenuIcon />}
            </button>

            {/* Calendar Icon */}
            <button className="flex items-center justify-center h-10 w-10 rounded-full bg-[#f8bcbc] text-white focus:outline-none">
              <Calendar className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white mt-2 w-full container mx-auto max-w-screen-xl rounded-b-3xl shadow-md"
          >
            <ul className="flex flex-col items-center space-y-4 py-6 text-lg font-medium font-serif">
              <li>
                <a
                  href="#home"
                  className="text-[#fbd1d0] hover:text-pink-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-pink-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#service" className="hover:text-pink-400 transition-colors">
                  Service
                </a>
              </li>
              <li>
                <a href="#procedure" className="hover:text-pink-400 transition-colors">
                  Procedures
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
