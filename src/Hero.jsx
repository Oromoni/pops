import React from "react";
import Form from "./Form";
import Services from "./Services";
import About from "./About";
import Back from "./Back";
//import Services from "../src/Services";
import Slider from "./Slider";

const Hero = () => {
  return (
    <>
      <div className=" p-2 bg-[#091912] text-white w-full" >
        <div className="  p-5 sm:flex sm:flex-row sm:gap-6 mt-4 flex items-center">
          <h6 className="text-2xl font-bold sm:w-2/3 " >
          With over  
          <span  className="text-[#F6DB31]"> 15+ years &nbsp;
          </span>
            of industry excellence, we are an integrated logistic firm specializing in<span className="text-[#F6DB31]"> Oil and Gas, </span> delivering tailored and comprehensive solutions for all your marine services and shipping needs
          
          </h6>

          {/* <div className="mt-2 sm:w-1/2 sm:text-sm text-5xl">
            <p className="text-base">
              We specialise in providing engineering and logistic services for various types of offshore vessels. Including AHTS (Anchor Handling Tug Supply), PSV (Platform Supply Vessel), and security vessels. Our engineering services cover both inshore and offshore machinery, with expertise in overhauling Caterpillar, Wartsila and Rolls Royce engines.
            </p>
            <br />
            <p className="mt-2 text-base">
             Working closely with owners, brokers and manufacturers, our in-house team of professionals manages the entire operation from planning loading and delivery. We also have extensive experience in handling port documentation, customs clerance, Coast Guard permissions and approvals, marine surveys, insurance and crew sign-on/off services.
            </p>
            <br />
            <p className="mt-2 flex flex-col gap-4 text-base" >
             <li>
              <span className="font-bold text-base">
                      Offshore Electrical & Logistic Support:&nbsp; </span>

  Specializing in offshore electrical installations, logistics for oil and gas, and providing green light/clearing for offshore services.</li>
             <li>
<span className="font-bold">
Marine & Crew Services:  &nbsp;
 </span>


  Offering a range of services including the supply of AGO (Automotive Gas Oil), chandlery, and crew services offshore.</li>
             <li>
<span className="font-bold">
Offshore Materials & Equipment Supply: &nbsp; 
</span> 

  Suppliers of all kinds of offshore materials and equipment, ensuring availability in any quantity for offshore operations.</li>
            </p>
            <br />
           
          </div> */}
        </div>
      </div>
       <About/>
       {/* <Slider/> */}
       <Services/>  
       <Back/> 
      
    </>
  );
};

export default Hero;
