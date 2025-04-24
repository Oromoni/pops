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
    <div className=" min-h-screen  font-sans" id="about">
      {/* Hero Section with Boat Image */}
      <div className="relative h-48  ">
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

      
       <div className="min-h-screen  w-full pt-8 md:px-6" >
        <div className="flex justify-between lg:px-10  items-center flex-col lg:flex-row pt-3  p-4 gap-6 ">
        <div className="bg-black h-[350px] sm:h-[400px] md:h-[463px] w-full md:w-[385px] relative ">
  <img src={tug} alt="Tugboat" className="w-full h-full object-cover" />
  <div className="md:absolute hidden h-44 w-48 bg-black bottom-0 -right-8 pl-5 font-bold flex-col justify-center rounded-md md:flex items-center text-white" id="about">
              <p>Delivering</p>
              <p className="text-yellow-400">Oil & Gas</p>
              <p>Unmatched</p>
              <p>Logistic Solutions</p>
            </div>
</div>

          <div className=" w-full flex justify-start flex-col  h-[450px] lg:h-[420px] gap-4  lg:w-3/5 max-w-[635px]">

          <p className="font-bold text-xl text-[#b4b4b4] ">Who We Are</p>
          <p className="text-2xl md:text-3xl lg:text-4xl">Your Trusted Partner for Logistic, <br /> Oil & Gas Solutions</p>
            <div className=" bg-gray-100/80 rounded-lg p-2">

            <p className="">
            Joshbim brings over a decade of experience in providing advanced
              offshore and onshore services and logistics within the oil and
              gas sector, successfully executing complex projects. We take pride
              in having delivered numerous projects for both international and
              local oil companies. Throughout our organization, we have fostered
              a culture of thorough engineering, trust, and teamwork. Our expert
              staff is dedicated to ensuring that your company receives
              personalized, reliable, and cost-effective procurement, logistics,
              and engineering services promptly.</p>
              <p className=" text-base mt-2">
              Additionally, Joshbim is actively involved in the energy transition
              by supporting the development of clean energy production solutions.
              We apply our offshore engineering and operational capabilities to
              drive future value creation.
            </p>
            </div>
          </div>
        </div>
        <div className="flex  justify-center md:justify-start items-center flex-col md:flex-row pt-5 md:pt-7 p-2 gap-6 lg:px-10">
  <div className="bg-black h-[450px] rounded-2xl md:h-[480px] mt-44 lg:h-[463px] w-full lg:max-w-[420px]">
    <img
      src={tanker}
      alt="tanker"
      className="h-full w-full object-cover rounded-lg grayscale-9"
    />
  </div>
  
  <div className="w-full flex flex-col items-center justify-start gap-6  md:gap-8 lg:w-3/5">
    
    <div className="h-auto w-3/4 lg:max-w-[575px] md:w-[325px] lg:w-[510px] p-3 bg-gray-100/80 rounded-2xl">
      <IoShieldCheckmarkSharp
        color="#003d7c"
    
        className="text-[#2d7353] text-2xl md:text-4xl transition-colors duration-300 ease-in-out hover:text-[#4caf50]"
      />
      <p className="text-lg sm:text-lg font-semibold">Our Mission</p>
      <p className="text-sm sm:text-base md:mt-1">
        Delivering a seamless and innovative experience while prioritizing excellence, valuing our people, and creating long-term value for stakeholders.
      </p>
    </div>

    <div className="h-auto w-3/4 lg:max-w-[575px] p-3 md:w-[325px] lg:w-[510px] bg-gray-100/80 rounded-2xl">
      <FaEye
        color="#003d7c"
        
        className="text-[#2d7353] text-2xl md:text-4xl transition-colors duration-300 ease-in-out "
      />
      <p className="text-lg sm:text-lg font-semibold  ">Our Vision</p>
      <p className="text-sm sm:text-base md:mt-1">
        Delivering a seamless and innovative experience while prioritizing excellence, valuing our people, and creating long-term value for stakeholders.
      </p>
    </div>
    
  </div>
</div>

      

      </div> 

 


    
      <div className="  w-full pt-3 px-5 md:px-10 md:pb-7 mt-2">
  <p className="text-center tracking-widest text-sm font-medium text-gray-500/80 pb-2 p-2 bg-white">
    MEET OUR EXPERT TEAM
  </p>

  <div className="flex min-h-full justify-between items-center lg:items-start flex-col lg:flex-row pt-3 p-4 gap-4">
    {/* Image Section */}
    <div className=" h-[400px] sm:h-[450px] md:h-[520px] w-full md:w-[420px] relative">
      <img src={boss}
    alt="ceo"
    className="h-full w-full object-cover rounded-lg" />
     <div className="bg-black text-white/75 font-medium absolute bottom-2 w-full rounded-md text-center py-2">
              ADEKUNLE KAYODE JOSEPH
            </div>
    </div>

    {/* Text Section */}
    <div className="w-full flex flex-col h-auto  lg:h-auto gap-4 lg:w-3/5">
      <div className="bg-gray-100/80 p-3 rounded-md">
        <p className="text-base">
          Mr. Adekunle Kayode Joseph is the CEO of Joshbim International Ltd. (2012 - till date). With over two decades of hands-on
          experience, Mr. Joseph has held several managerial and operational positions in the Maritime and Logistic Services sectors.
          His leadership has played a pivotal role in shaping the direction of Joshbim International Ltd.
        </p>

        <p className="mt-3 text-base">
          With a remarkable 22 years of experience, Mr. Joseph is considered a leader in the maritime logistics industry, providing expert
          insights and strategic direction in all areas of his business. His forward-thinking approach and dedication to the highest standards
          of service have earned him multiple certifications and accolades.
        </p>
      </div>

      {/* Certificates Section */}
      <div className="rounded-md p-3 mt-3 pb-4 bg-gray-200/80 h-auto">
        <p className="mt-3 text-sm font-semibold text-black/70">CERTIFICATES OBTAINED</p>
        <ul className="flex flex-wrap pt-2">
          <li className="w-full sm:w-1/2 flex items-center text-xs pt-2">
            <FaCheck className="mr-2 text-xs font-semibold text-black/75" />
            Masters Unlimited &nbsp; <Flag code="GR" className="inline-block w-5 h-5 rounded-lg" />
          </li>
          <li className="w-full sm:w-1/2 flex items-center text-xs pt-2">
            <FaCheck className="mr-2 text-xs font-semibold text-black/75" />
            MASTERS UNLIMITED &nbsp; <Flag code="HN" className="inline-block w-5 h-5" />
          </li>
          <li className="w-full sm:w-1/2 flex items-center text-xs pt-2">
            <FaCheck className="mr-2 text-xs font-semibold text-black/75" />
            MASTERS 300GRT &nbsp; <Flag code="HN" className="inline-block w-5 h-5" />
          </li>
          <li className="w-full sm:w-1/2 flex items-center text-xs pt-2">
            <FaCheck className="mr-1 text-xs font-semibold text-black/75" />
            D.P ADVANCED SIMULATION &nbsp; <Flag code="IN" className="inline-block w-5 h-5" />
          </li>
          <li className="w-full sm:w-1/2 flex items-center text-xs pt-2">
            <FaCheck className="mr-2 text-xs font-semibold text-black/75" />
            D.P BASIC CERTIFICATE &nbsp; <Flag code="IN" className="inline-block w-5 h-5" />
          </li>
          <li className="w-full sm:w-1/2 flex items-center text-xs pt-2">
            <FaCheck className="mr-2 text-xs font-semibold text-black/75" />
            GMDSS &nbsp; <Flag code="HN" className="inline-block w-5 h-5" />
          </li>
          <li className="w-full sm:w-1/2 flex items-center text-xs pt-2">
            <FaCheck className="mr-2 text-xs font-semibold text-black/75" />
            ANCHOR HANDLING &nbsp; <Flag code="IN" className="inline-block w-5 h-5" />
          </li>
          <li className="w-full sm:w-1/2 flex items-center text-xs pt-2">
            <FaCheck className="mr-2 text-xs font-semibold text-black/75" />
            RISK ASSESSMENT &nbsp; <Flag code="IN" className="inline-block w-5 h-5" />
          </li>
          <li className="w-full sm:w-1/2 flex items-center text-xs pt-2">
            <FaCheck className="mr-2 text-xs font-semibold text-black/75" />
            HUET &nbsp; <Flag code="IN" className="inline-block w-5 h-5" />
          </li>
          <li className="w-full sm:w-1/2 flex items-center text-xs pt-2">
            <FaCheck className="mr-2 text-xs font-semibold text-black/75" />
            BOSIET &nbsp; <Flag code="GR" className="inline-block w-5 h-5" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
  
       {/* <Slider/>    */}
    </div>
  );
};

export default About;
