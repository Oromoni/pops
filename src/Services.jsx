import React from "react";

const Services = () => {
  return (
    <div id="Services" name={Services}>
      <section className="bg-[#241F12] text-white w-full ">
        <h6 className="text-center p-6 text-xl font-bold text-white">
          SERVICES
        </h6>
        <div className=" p-5 sm:flex sm:flex-row sm:gap-2 mt-4 gap-5 sm:justify-around sm:items-center items-center justify-center flex flex-col flex-grow">
          <div className="w-80 bg-black text-white rounded-lg h-[480px]">
            <img
              src="https://static.wixstatic.com/media/100a69_f58ac86f725240f8b45088cd3d85ab16~mv2.jpg/v1/crop/x_265,y_0,w_1471,h_1108/fill/w_300,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/maritime-security-homepage_edited.jpg"
              alt=""
              className="rounded-lg w-80"
            />
            <div className="mt-4 p-2">
              <h6>Design & Engineering</h6>
              <p className="mt-2">
                Provides customized ship designs, vessel specifications,
                technical consultancy, FEED, integrated and turnkey engineering
                solutions to meet clients’ specific requirements in the Offshore
                & Marine and Process Plants industries..
              </p>
              <button className="mt-2">Read more</button>
            </div>
          </div>
          <div className="w-80 bg-black text-white  rounded-lg h-[480px]">
            <img
              src="https://static.wixstatic.com/media/100a69_830ea3d8186045b7a7e16006b4a95da8~mv2.jpg/v1/fill/w_300,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Diadema-Prua11.jpg"
              alt=""
              className="rounded-lg w-80"
            />
            <div className="mt-4 p-2">
              <h6>Design & Engineering</h6>
              <p className="mt-2">
                Provides customized ship designs, vessel specifications,
                technical consultancy, FEED, integrated and turnkey engineering
                solutions to meet clients’ specific requirements in the Offshore
                & Marine and Process Plants industries..
              </p>
              <button className="mt-2">Read more</button>
            </div>
          </div>
          <div className="w-80 bg-black text-white  rounded-lg h-[480px]">
            <img
              src="https://static.wixstatic.com/media/100a69_f58ac86f725240f8b45088cd3d85ab16~mv2.jpg/v1/crop/x_265,y_0,w_1471,h_1108/fill/w_300,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/maritime-security-homepage_edited.jpg"
              alt=""
              className="rounded-lg w-80"
            />
            <div className="mt-4 p-2">
              <h6>Design & Engineering</h6>
              <p className="mt-2">
                Provides customized ship designs, vessel specifications,
                technical consultancy, FEED, integrated and turnkey engineering
                solutions to meet clients’ specific requirements in the Offshore
                & Marine and Process Plants industries..
              </p>
              <button className="mt-2">Read more</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
