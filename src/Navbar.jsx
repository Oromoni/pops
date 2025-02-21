import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // Use Link from react-router-dom

const Navbar = () => {
  const [nav, setnav] = useState(false);

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.9,
      },
    },
  };

  return (
    <div className="bg-transparent sm:bg-black/20 z-10 text-white flex justify-between p-4 items-center sm:px-12 px-6 w-full absolute top-0 left-0">
      <div>
        <h1 className="text-2xl font-bold cursor-pointer">
          JOSHBIM
          <span className="text-[#F6DB31] text-4xl">.</span>
        </h1>
      </div>
      <div className="hidden sm:flex flex-row gap-9 font-semibold items-center cursor-pointer">
        <Link
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#F6DB31] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          to="/" // Link to Home page
        >
          Home
        </Link>
        <Link
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#F6DB31] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          to="/about" // Link to About page
        >
          About
        </Link>
        <Link
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#F6DB31] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          to="/service" // Link to Services page (if you have this route)
        >
          Service
        </Link>
        <Link
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#F6DB31] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          to="/contact" // Link to Contact page
        >
          Contact
        </Link>
      </div>

      <div className="sm:hidden">
        {!nav ? (
          <CiMenuBurger
            size={30}
            onClick={() => {
              setnav(true);
            }}
          />
        ) : (
          <IoCloseOutline
            className="z-30"
            size={30}
            onClick={() => {
              setnav(false);
            }}
          />
        )}
      </div>

      <AnimatePresence>
        {nav ? (
          <motion.div
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={"exit"}
            className="h-screen bg-black text-white w-full top-0 left-0 overflow-hidden bottom-0 z-20 fixed flex flex-col justify-center items-center gap-4"
          >
            <div className="flex flex-col">
              <div className="flex flex-col gap-4 font-bold text-2xl">
                <motion.div
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 1,
                    },
                  }}
                >
                  <Link
                    onClick={() => {
                      setnav(false);
                    }}
                    to="/"
                  >
                    Home
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.8,
                    },
                  }}
                >
                  <Link
                    onClick={() => {
                      setnav(false);
                    }}
                    to="/about"
                  >
                    About
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ y: 90, opacity: 1 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.6,
                    },
                  }}
                >
                  <Link
                    onClick={() => {
                      setnav(false);
                    }}
                    to="/service"
                  >
                    Services
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ y: 90, opacity: 1 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.4,
                    },
                  }}
                >
                  <Link
                    onClick={() => {
                      setnav(false);
                    }}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </motion.div>
              </div>
              <div>
                <IoCloseOutline
                  className="top-0 absolute right-0 mt-4 mr-4"
                  size={30}
                  onClick={() => {
                    setnav(false);
                  }}
                />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
