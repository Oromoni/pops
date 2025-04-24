import React from "react";
import boat from "./asset/boat.jpg";
import { FaCheck } from 'react-icons/fa';



const Services = () => {
  return (
    <div  >
      <section className="min-h-screen w-full bg-[#eceded] text-black font-sans pb-12" id="service">
        {/* Hero Section with Boat Image */}
        <div className="relative md:h-60 h-32 bg-pink-400">
          <img
            src={boat}
            alt="boat"
            className="h-full w-full object-cover rounded-br-[40]"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-[#0c2017] opacity-80 rounded-br-[40]"></div>
          <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
            <span className="text-white font-bold text-4xl sm:text-5xl md:text-6xl">Services</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 pt-12" >
          <div className="flex flex-col lg:flex-row justify-between gap-10 items-center p-1 sm:px-10 md:px-20">
            {/* Products List */}
            <div className="h-[463px] w-full md:w-[450px] cursor-pointer rounded-2xl mb-6 sm:mb-0 bg-[#091912] text-white p-3">
              <p className="text-sm font-bold mb-4 text-white/60">PRODUCTS</p>
              <ul className="space-y-2 text-white/80 text-sm">
      <li className="flex items-center">
        <FaCheck className=" mr-2 text-yellow-400 hover:bg-pink-600 text-xs" /> Elemental Gases
      </li>
      <li className="flex items-center">
        <FaCheck className=" mr-2 text-yellow-400 text-xs " /> Acetylene
      </li>
      <li className="flex items-center">
        <FaCheck className=" mr-2 text-yellow-400 text-xs" /> Propane
      </li>
      <li className="flex items-center">
        <FaCheck className=" mr-2 text-yellow-400 text-xs" /> Refrigerated Liquefied Oxygen
      </li>
      <li className="flex items-center">
        <FaCheck className=" mr-2 text-yellow-400 text-xs" /> Refrigerated Liquefied Argon
      </li>
      <li className="flex items-center">
        <FaCheck className=" mr-2 text-yellow-400 text-xs" /> Refrigerated Liquefied Nitrogen
      </li>
      <li className="flex items-center">
        <FaCheck className=" mr-2 text-yellow-400 text-xs" /> Welding Mixtures based on Oxygen & Argon
      </li>
      <li className="flex items-center">
        <FaCheck className=" mr-2 text-yellow-400 text-xs" /> Liquefied Carbon Dioxide
      </li>
      <li className="flex items-center">
        <FaCheck className=" mr-2 text-yellow-400 text-xs" /> Compressed Hydrogen & other Non-Combustible Gases
      </li>
    </ul>
            </div>

            {/* Why Choose Us Section */}
            <div className="h-[463px] w-full md:w-[575px] p-2 rounded-2xl" id="">
              <p className="text-sm text-green-900/80 font-bold mb-4 ">WHY CHOOSE US</p>

              <p className="text-base mb-4">
                Our expert team is fully dedicated to overcoming the unique challenges of the oil and gas industry by delivering comprehensive logistic and procurement solutions tailored for both onshore and offshore operations.
              </p>

              <p className="text-base mb-4">
                We specialise in the swift and secure delivery of services, oil, oil products, and essential equipment for oil and gas production and processes. By adhering to the highest safety and quality standards, we guarantee that every aspect of warehousing, packaging, and shipping is carried out with utmost reliability.
              </p>

              <p className="text-base">
                In addition, we provide cost-effective transportation and distribution of oil and gas freight through our extensive global network of carriers and agents. Our highly trained personnel utilize state-of-the-art equipment to ensure the safe and efficient loading of goods onto vessels or trucks for seamless delivery. With us, you can trust that your operations are in capable hands, enabling you to focus on your core business objectives.
              </p>
            </div>
          </div>
        </div>

        {/* Card Section */}
        {/* <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 p-4">
          <div className="flex-1 p-6 bg-white shadow-md hover:shadow-xl hover:translate-y-1 transition-all duration-300 rounded-lg">
            <p>Content 1</p>
          </div>
          <div className="flex-1 p-6 bg-white shadow-md hover:shadow-xl hover:translate-y-1 transition-all duration-300 rounded-lg">
            <p>Content 2</p>
          </div>
          <div className="flex-1 p-6 bg-white shadow-md hover:shadow-xl hover:translate-y-1 transition-all duration-300 rounded-lg">
            <p>Content 3</p>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Services;
