import React from "react";
import Form from "./Form";
import Services from "./Services";
import About from "./About";
//import Services from "../src/Services";

const Hero = () => {
  return (
    <>
      <div className=" p-2 bg-[#0c2017] text-white" >
        <div className="  p-5 sm:flex sm:flex-row sm:gap-6 mt-4">
          <h6 className="text-2xl font-bold sm:w-1/2" >
            As an<span className="text-[#F6DB31]"> Oil and Gas </span>
            integrated logistic firm with 15+ years of industry excellence, we provide
            holistic and bespoke solutions for your marine and shipping needs.
          </h6>

          <div className="mt-2 sm:w-1/2 sm:text-sm text-5xl">
            <p className="text-base">
              We specialised in providing logisitic for all kinds of Offshore vessels such as AHTS, PSV, Security vessels. Providing engineering service for offshore machinery eg expert in catapillar general overhauling of catapillar , wastila and Rolls Royce engines.
            </p>
            <br />
            <p className="mt-2 text-base">
              Working closely with owners, brokers, and manufacturers, our
              in-house team of professionals oversees the entire operation from
              planning to loading and delivery. We take charge of port
              documentation, customs clearance, coast guard permissions &
              approvals, marine surveys, insurance, and sign-on/off of crew
              services.
            </p>
            <br />
            <p className="mt-2 flex flex-col gap-4 text-base" id="service">
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
           
          </div>
        </div>
      </div>
      <Services/>
      <About/>
      <Form/>
    </>
  );
};

export default Hero;
