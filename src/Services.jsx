import React from "react";
import boat from "./asset/boat.jpg"

const Services = () => {
  return (
    <div id="Services" name={Services}>
      <section className="min-h-screen w-full bg-[#eceded] text-black">
      <div className="relative h-60 bg-pink-400">
  <img src={boat} alt="boat" className="h-full w-full object-cover rounded-br-[40]" />
  <div className="absolute top-0 left-0 h-full w-full bg-[#0c2017] opacity-80 rounded-br-[40]"></div>
  <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
    <span className="text-white font-bold text-6xl">Services</span>
  </div>
</div>
<div className="">
  
</div>
<div className=" p-4">
  <div className="flex flex-row justify-between items-center p-1 pl-20 pr-20">
    <div className="h-[463px] w-[450px] ">
    <p className="text-xl font-bold mb-4">PRODUCTS</p>
<ul className="space-y-2">
  <li className="flex items-center">
    <span className="w-2 h-2 bg-black rounded-full mr-2"></span> Elemental Gases
  </li>
  <li className="flex items-center">
    <span className="w-2 h-2 bg-black rounded-full mr-2"></span> Acetylene
  </li>
  <li className="flex items-center">
    <span className="w-2 h-2 bg-black rounded-full mr-2"></span> Propane
  </li>
  <li className="flex items-center">
    <span className="w-2 h-2 bg-black rounded-full mr-2"></span> Refigrated Liquefied Oxygen
  </li>
  <li className="flex items-center">
    <span className="w-2 h-2 bg-black rounded-full mr-2"></span> Refigrated Liquefied Argon
  </li>
  <li className="flex items-center">
    <span className="w-2 h-2 bg-black rounded-full mr-2"></span> Refigrated Liquefied Nitrogen
  </li>
  <li className="flex items-center">
    <span className="w-2 h-2 bg-black rounded-full mr-2"></span> Welding Mixtures based on Oxygen & Argon
  </li>
  <li className="flex items-center">
    <span className="w-2 h-2 bg-black rounded-full mr-2"></span> Liquefied Carbon Dioxide
  </li>
  <li className="flex items-center">
    <span className="w-2 h-2 bg-black rounded-full mr-2"></span> Compressed Hydrogen & other Non-Combustible Gases
  </li>
</ul>

    </div>
    <div className="h-[463px] w-[575px]">
    <p className="text-medium text-green-800 font-bold mb-4">WHY CHOOSE US</p>

    <p className="text-base mb-4">
  We provide a dedicated team of professionals who address the challenges of the oil and gas industry by offering a comprehensive range of onshore and offshore logistics and procurement solutions.
</p>

<p className="text-base mb-4">
  Our services include the delivery of oil, oil products, and equipment for oil and gas production and processing. We adhere to the highest safety and quality standards, ensuring safe and reliable warehousing, packaging, and shipping of cargo to its final destination.
</p>

<p className="text-base">
  We also offer cost-effective transportation and distribution of oil and gas freight by leveraging our global network of carriers and agents. Our highly trained personnel handle goods with modern equipment to ensure safe loading onto vessels or trucks for offshore and onshore delivery.
</p>

    </div>
  </div>
</div>
    <div className="flex space-x-4 p-4">
  <div className="flex-1 p-6 bg-white shadow-md hover:shadow-xl hover:translate-y-1 transition-all duration-300 rounded-lg">
    <p>Content 1</p>
  </div>
  <div className="flex-1 p-6 bg-white shadow-md hover:shadow-xl hover:translate-y-1 transition-all duration-300 rounded-lg">
    <p>Content 2</p>
  </div>
  <div className="flex-1 p-6 bg-white shadow-md hover:shadow-xl hover:translate-y-1 transition-all duration-300 rounded-lg">
    <p>Content 3</p>
  </div>
  <div className="flex-1 p-6 bg-white shadow-md hover:shadow-xl hover:translate-y-1 transition-all duration-300 rounded-lg">
    <p>Content 4</p>
  </div>
</div>


      </section>
    </div>
  );
};

export default Services;
