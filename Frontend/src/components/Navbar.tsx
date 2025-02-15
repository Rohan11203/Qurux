import { Calendar, Circle } from 'lucide-react'
import { MenuIcon } from '../Icons/MenuIcon'
import { motion } from 'framer-motion'
export const Navbar = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: -50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.6, ease: "easeInOut" }}
    className="bg-white w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto rounded-3xl p-4 sm:p-6 md:p-6">
      <div className='flex justify-between '>
        <div className='flex gap-2 items-center text-2xl font-semibold'><span><Circle fill='#facbcb' height={50} width={35}/></span>QurRux</div>
        <div className='flex gap-4 cursor-pointer text-lg items-center font-medium font-serif'>
            <div className='flex gap-10 hidden lg:block lg:flex'>
            <div className='text-[#facbcb]'>Home</div>
            <div>About</div>
            <div>Service</div>
            <div>Procedures</div>
            <div>Pages +</div>
            <div>Blog</div>
            <div>Contact</div>
            </div>
            <div className='block lg:hidden flex h-10 w-10 rounded-full bg-[#f8bcbc] text-white items-center  justify-center'>
              <MenuIcon />
            </div>
            <div className='h-10 w-10 rounded-full bg-[#f8bcbc] text-white items-center flex justify-center'>
                <div><Calendar /></div>
            </div>
        </div>
      </div>
    </motion.div>
  )
}

