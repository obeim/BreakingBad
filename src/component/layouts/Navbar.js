import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className='container mx-5 flex justify-between items-center flex-wrap gap-10 md:mx-auto text-white my-7'>
      <motion.h1
        transition={{ delay: 0.2 }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className='text-3xl '
      >
        <span className='px-1 border shadow-lg bg-green-900'>T</span>
        he <span className='px-1 border shadow-lg bg-green-900'>B</span>reaking
        <span className=' px-1 border shadow-lg bg-green-900'>B</span>ad
      </motion.h1>
      <motion.div
        transition={{ delay: 0.8 }}
        initial={{ x: 200 }}
        animate={{ x: 0 }}
      >
        <NavLink exact activeClassName='border-b' to='/' className='py-2 mx-3'>
          Home{" "}
        </NavLink>
        <NavLink exact activeClassName='border-b' to='/quotes' className='py-2'>
          Quotes
        </NavLink>
      </motion.div>
    </div>
  );
};

export default Navbar;
