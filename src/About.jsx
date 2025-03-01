import React from "react";
import boat3 from "./asset/boat3.jpg";
import tug from "./asset/tug.jpg";
import tanker from "./asset/tanker.jpg";
import boss from "./asset/boss.jpg";
import { FaCircle } from 'react-icons/fa';  // Use FaCircle or another icon you prefer
import Slider from "./Slider";
import Flag from 'react-world-flags';
import { IoShieldCheckmarkSharp } from "react-icons/io5"
import { FaEye } from "react-icons/fa";
import { FaCheck } from "react-icons/fa"; // Make sure you import the FaCheck icon




const About = () => {
  return (
    <div className="bg-white min-h-screen w-full font-sans" id="about">
      {/* Hero Section with Boat Image */}
      <div className="relative h-60 ">
        <img
          src={boat3}
          alt="boat"
          className="h-full w-full object-cover rounded-br-[40]"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-[#0c2017] opacity-70 rounded-br-[40]"></div>
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
          <span className="text-white/85 font-bold text-4xl sm:text-5xl md:text-6xl">
            About Us
          </span>
        </div>
      </div>

      {/* About Us Section */}
      <div className="h-auto bg-white py-8">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-10 md:px-20">
          <div className="h-[350px] sm:h-[400px] md:h-[463px] w-full md:w-[375px] relative mb-8 md:mb-0">
            <img
              src={tug}
              alt="tugboat"
              className="h-full w-full object-cover rounded-lg"
            />
            <div className="absolute h-44 w-48 bg-black bottom-0 -right-8 pl-5 font-bold flex-col justify-center rounded-md flex items-center text-white">
              <p>Delivering</p>
              <p className="text-yellow-400">Oil & Gas</p>
              <p>Unmatched</p>
              <p>Logistic Solutions</p>
            </div>
          </div>
          <div className="h-auto w-full md:w-[575px]">
            <p className="font-bold text-xl text-[#b4b4b4]">Who We Are</p>
            <p className="mt-4 text-2xl sm:text-3xl md:text-4xl">Your Trusted Partner for Logistic, Oil & Gas Solutions</p>
            <p className="mt-3 text-base text-[#818387] ">
              Joshbim brings over a decade of experience in providing advanced
              offshore and onshore services and logistics within the oil and
              gas sector, successfully executing complex projects. We take pride
              in having delivered numerous projects for both international and
              local oil companies. Throughout our organization, we have fostered
              a culture of thorough engineering, trust, and teamwork. Our expert
              staff is dedicated to ensuring that your company receives
              personalized, reliable, and cost-effective procurement, logistics,
              and engineering services promptly.
            </p>
            <p className="mt-3 text-base ">
              Additionally, Joshbim is actively involved in the energy transition
              by supporting the development of clean energy production solutions.
              We apply our offshore engineering and operational capabilities to
              drive future value creation.
            </p>
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="h-auto bg-white py-8">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-10 md:px-20">
          <div className="h-[450px] sm:h-[400px] md:h-[463px] w-full md:w-[420px] relative mb-8 md:mb-0">
            <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
            <img
              src={tanker}
              alt="tanker"
              className="h-full w-full object-cover rounded-lg grayscale-9"
            />
          </div>
          <div className="h-auto w-full md:w-[575px] flex gap-4 flex-col">
          <div className="flex flex-col gap-6">
      {/* Mission */}
      <div className="flex flex-col bg-gray-100/80 items-start p-6 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-gray-100 hover:scale-105">
        <IoShieldCheckmarkSharp
          color="#003d7c"
          size={65}
          className="text-[#2d7353] transition-colors duration-300 ease-in-out hover:text-[#4caf50]"
        />
        <p className="mt-4 text-xl font-bold">Our Mission</p>
        <p className="mt-3 text-base ">
          To be the Sub-Saharan African leader in marine logistics, services,
          and solutions while respecting local content, offering innovation-led,
          integrated features that exceed client expectations.
        </p>
      </div>

      {/* Vision */}
      <div className="flex flex-col bg-gray-100/80 items-start p-6 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-gray-100 hover:scale-105">
        <FaEye
          color="#003d7c"
          size={65}
          className="text-[#2d7353] transition-colors duration-300 ease-in-out hover:text-[#ff9800]"
        />
        <p className="mt-3 font-bold text-xl">Our Vision</p>
        <p className="mt-3 text-base w-[79%] text-[#9e9c9a] font-bold ">
         Delivering a seamless and innovative experience while prioritizing excellence, valuing our people, and creating long-term value for stakeholders
        </p>
      </div>
    </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="min-h-screen  w-full pt-8">
    <p className="text-center tracking-widest text-sm font-medium text-gray-500/80 pb-2">MEET OUR EXPERT TEAM </p>
        <div className="flex flex-col md:flex-row justify-between items-center p-10 px-20">
          <div className="h-[400px] sm:h-[450px] md:h-[520px] w-full md:w-[420px] relative mb-8 md:mb-0">
          <div className="overflow-hidden">
  <img
    src={boss}
    alt="ceo"
    className="h-full w-full object-cover rounded-lg hover:scale-110  transition-transform duration-300"
  />
</div>

            <div className="bg-black text-white/75 font-medium absolute bottom-0 w-full rounded-md text-center py-2">
              ADEKUNLE KAYODE JOSEPH
            </div>
          </div>

          <div className="h-[520px] flex flex-col gap-6 w-full md:w-[575px] tracking-wide">
           <div className="bg-gray-100/80 p-3 rounded-md">

            <p className=" text-base ">
              Mr. Adekunle Kayode Joseph is the CEO of Joshbim International
              Ltd. (2012 - till date). With over two decades of hands-on
              experience, Mr. Joseph has held several managerial and operational
              positions in the Maritime and Logistic Services sectors. His
              leadership has played a pivotal role in shaping the direction of
              Joshbim International Ltd.
            </p>

            <p className="mt-3 text-base ">
              With a remarkable 22 years of experience, Mr. Joseph is considered
              a leader in the maritime logistics industry, providing expert
              insights and strategic direction in all areas of his business. His
              forward-thinking approach and dedication to the highest standards
              of service have earned him multiple certifications and accolades.
            </p>
           </div>


            <div className=" rounded-md p-3 mt-3 pb-4 bg-gray-200/80 ">
  <p className="mt-3 text-sm font-semibold text-black/70">
    CERTIFICATES OBTAINED
  </p>
  <ul className="flex flex-wrap pt-2 ">
    <li className="w-full sm:w-1/2 flex items-center text-xs   pt-2">
      <FaCheck className="mr-2 text-xs font-semibold  text-black/75" />
      Masters Unlimited &nbsp; <Flag code="GR" className="inline-block w-5 h-5 rounded-lg" />
    </li>
    <li className="w-full sm:w-1/2 flex items-center text-xs  pt-2">
      <FaCheck className="mr-2 text-xs font-semibold  text-black/75" />
      MASTERS UNLIMITED &nbsp; <Flag code="HN" className="inline-block w-5 h-5" />
    </li>
    <li className="w-full sm:w-1/2 flex items-center text-xs  pt-2">
      <FaCheck className="mr-2 text-xs font-semibold  text-black/75" />
      MASTERS 300GRT &nbsp;  <Flag code="HN" className="inline-block w-5 h-5" />
    </li>
    <li className="w-full sm:w-1/2 flex items-center text-xs  pt-2">
      <FaCheck className="mr-1 text-xs font-semibold  text-black/75" />
      D.P ADVANCED SIMULATION &nbsp; <Flag code="IN" className="inline-block w-5 h-5" />
    </li>
    <li className="w-full sm:w-1/2 flex items-center text-xs  pt-2">
      <FaCheck className="mr-2 text-xs font-semibold  text-black/75" />
      D.P BASIC CERTIFICATE &nbsp; <Flag code="IN" className="inline-block w-5 h-5" />
    </li>
    <li className="w-full sm:w-1/2 flex items-center text-xs  pt-2">
      <FaCheck className="mr-2 text-xs font-semibold  text-black/75" />
      GMDSS &nbsp; <Flag code="HN" className="inline-block w-5 h-5" />
    </li>
    <li className="w-full sm:w-1/2 flex items-center text-xs  pt-2">
      <FaCheck className="mr-2 text-xs font-semibold  text-black/75" />
      ANCHOR HANDLING &nbsp; <Flag code="IN" className="inline-block w-5 h-5" />
    </li>
    <li className="w-full sm:w-1/2 flex items-center text-xs  pt-2">
      <FaCheck className="mr-2 text-xs font-semibold  text-black/75" />
      RISK ASSESSMENT &nbsp; <Flag code="IN" className="inline-block w-5 h-5" />
    </li>
    <li className="w-full sm:w-1/2 flex items-center text-xs  pt-2">
      <FaCheck className="mr-2 text-xs font-semibold  text-black/75" />
      HUET &nbsp; <Flag code="IN" className="inline-block w-5 h-5" />
    </li>
    <li className="w-full sm:w-1/2 flex items-center text-xs  pt-2">
      <FaCheck className="mr-2 text-xs font-semibold  text-black/75" />
      BOSIET &nbsp; <Flag code="GR" className="inline-block w-5 h-5" />
    </li>
  </ul>
</div>
          </div>
        </div>
      </div>
      <Slider/>
    </div>
  );
};

export default About;
