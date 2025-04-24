import React from "react";
import boat from "./asset/boat.jpg";
import { FaCheck } from 'react-icons/fa';
import Slider from "./Slider";

const Services = () => {
  return (
    <div>
      <Slider />
      <section className="min-h-screen w-full bg-[#eceded] text-black font-sans pb-12" id="service">
        
        {/* Hero Section with Boat Image */}
        <div className="relative md:h-60 h-36">
          <img
            src={boat}
            alt="boat"
            className="h-full w-full object-cover rounded-br-[40px]"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-[#0c2017] opacity-80 rounded-br-[40px]"></div>
          <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
            <span className="text-white font-bold text-4xl sm:text-5xl md:text-6xl">Services</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 pt-12">
          <div className="flex flex-col lg:flex-row justify-between gap-10 items-start p-1 sm:px-6 md:px-20">
            
            {/* Products List */}
            <div className="w-full max-w-full md:max-w-md bg-[#091912] text-white p-4 rounded-2xl mb-6 lg:mb-0">
              <p className="text-sm font-bold mb-4 text-white/60">PRODUCTS</p>
              <ul className="space-y-2 text-white/80 text-sm">
                {[
                  "Elemental Gases",
                  "Acetylene",
                  "Propane",
                  "Refrigerated Liquefied Oxygen",
                  "Refrigerated Liquefied Argon",
                  "Refrigerated Liquefied Nitrogen",
                  "Welding Mixtures based on Oxygen & Argon",
                  "Liquefied Carbon Dioxide",
                  "Compressed Hydrogen & other Non-Combustible Gases"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <FaCheck className="mr-2 mt-1 text-yellow-400 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Choose Us Section */}
            <div className="w-full max-w-full lg:max-w-2xl p-2 rounded-2xl">
              <p className="text-sm text-green-900/80 font-bold mb-4">WHY CHOOSE US</p>
              
              <p className="text-base mb-4 text-justify">
                Our expert team is fully dedicated to overcoming the unique challenges of the oil and gas industry by delivering comprehensive logistic and procurement solutions tailored for both onshore and offshore operations.
              </p>

              <p className="text-base mb-4 text-justify">
                We specialise in the swift and secure delivery of services, oil, oil products, and essential equipment for oil and gas production and processes. By adhering to the highest safety and quality standards, we guarantee that every aspect of warehousing, packaging, and shipping is carried out with utmost reliability.
              </p>

              <p className="text-base text-justify">
                In addition, we provide cost-effective transportation and distribution of oil and gas freight through our extensive global network of carriers and agents. Our highly trained personnel utilize state-of-the-art equipment to ensure the safe and efficient loading of goods onto vessels or trucks for seamless delivery. With us, you can trust that your operations are in capable hands, enabling you to focus on your core business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
