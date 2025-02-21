import React from 'react';
import { FaPhone } from 'react-icons/fa'; // Import the phone icon from React Icons
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { SiFireship } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black/95 text-white py-8 border-t border-black/20" id="contact">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* <div className="text-center md:text-left">
          <p className="text-gray-400 text-sm">© 2025 JOSHBIM</p>
        </div> */}

      <div className="flex flex-col justify-center items-start "> <div className="flex items-center space-x-3">
            <CiMail  className="text-white" size={15} />
            <p className="text-white font-semibold">dummy@mail.com</p>
</div>
 <div className="flex items-center space-x-3">
            <FaPhone className="text-white" size={15} />
            <p className="text-white font-semibold">+234 803 823 0112</p>
          </div>
          </div>       

          <div className="text-white/20">
    <SiFireship size={30} />
</div>



        <div className="flex flex-col  items-start gap-2 text-sm">
        
          <div className="text-white text-center md:text-left flex gap-3 ">
            <IoLocationOutline  size={20}  />
            <p className="text-gray-400">3rd block, 9A Aerodrome Rd Apapa, <br />  Lagos, Canada</p> 
          </div>
         
          <div className="text-white text-center md:text-left flex gap-3 ">
            <IoLocationOutline  size={20}  />
            <p className="text-gray-400">3rd block, 9A Aerodrome Rd Apapa, <br />  Lagos, Nigeria</p> 
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
