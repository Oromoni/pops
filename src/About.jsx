import React from 'react';
import boat3 from "./asset/boat3.jpg"
import tug from "./asset/tug.jpg"
import tanker from "./asset/tanker.jpg"
import boss from "./asset/boss.jpg"


const About = () => {
  return (
    <div className="bg-gray-200 min-h-screen w-full" id='about'>
      <div className="relative h-60 ">
  <img src={boat3} alt="boat" className="h-full w-full object-cover rounded-br-[40]" />
  <div className="absolute top-0 left-0 h-full w-full bg-[#0c2017] opacity-70 rounded-br-[40]"></div>
  <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
    <span className="text-white font-bold text-6xl">About Us</span>
  </div>
</div>
    
<div className="h-screen w-full bg-gray-200">
  <div className="flex flex-row justify-between items-center p-7 pl-20 pr-20 ">
    <div className=" h-[463px] w-[375px] relative">

    <img src={tug} alt="tugboat" className="h-full w-full object-cover rounded-lg " />
    <div className="absolute h-44 w-48 bg-black bottom-0 -right-8 pl-5 font-bold flex-col justify-center rounded-md flex items-center text-white">
<p>Delivering</p>
<p className='text-yellow-400'>Oil & Gas</p>
<p>Unmatched</p>
<p>Logistic Solutions</p>
</div>


    </div>
    <div className=" h-[463px] w-[575px]"> 
      <p className='font-bold'>who we are</p>
      <p className='mt-4 text-3xl'>About us</p>
      <p className=' mt-3'>We offer personalised and efficient solution to oil and Gas companies, providing prompt and reliable solutions to move your Cargo from origin to destination, both domestic and across the globe. we have various models of freight transport such as Air, Ocean, Inland, Ground and Barge</p>

      <p className='mt-3'>Our Offices and Phone lines are all open during working hours at your convinence. Our expert Staff will ensure that your company receives personalised reliable and cost-effective procurment and transportation solutions

</p>
    </div>
  </div>
</div>
<div className="h-screen bg-gray-200 w-full">
  <div className="flex flex-row justify-between items-center p-1 pl-20 pr-20">
    <div className="h-[463px] w-[375px] relative">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      
      <img src={tanker} alt="tugboat" className="h-full w-full object-cover rounded-lg" />
    </div>
    <div className="h-[463px] w-[575px]">
      <p className="mt-4 text-3xl">Our mission</p>
      <p className="mt-3">
        Our mission is to deliver reliable and cost effective logistic services tailored to the specific needs of our client, ensuring seamless operations, on time deliveries and adherence to the highest safety and quality standards. we strive to optimise our processes, embrace technology advancement and prioterise environemntal stewardship in all our operations.
      </p>
      <p className='mt-3 font-semibold'>Our Vision</p>
      <p className="mt-3">
        To be the leading provider of innovative and sustanable logistic solutions in the oil and gas industry, setting new standards for efficency, safety and evironmental responsibility    </p>
    </div>
  </div>
</div>

<p className='text-center'>Our Team</p>
<div className="min-h-screen bg-gray-200 w-full">
  <div className="flex flex-row justify-between items-center p-1 pl-20 pr-20 ">
  <div className="h-[520px] w-[420px] relative">
  <img src={boss} alt="ceo" className="h-full w-full object-cover rounded-lg" />
  <div className="bg-black text-white absolute bottom-0 w-full text-center py-2">
    ADEKUNLE KAYODE JOSEPH
  </div>
</div>

    <div className=" h-full w-[575px]"> 
      
    <p className='mt-4 text-3xl'>CEO</p>
<p className='mt-3'>
  Mr. Adekunle Kayode Joseph is the CEO of Joshbim International Ltd. (2012 - till date). With over two decades of hands-on experience, Mr. Joseph has held several managerial and operational positions in the Maritime and Logistic Services sectors. His leadership has played a pivotal role in shaping the direction of Joshbim International Ltd.
</p>


<p className='mt-3'>
  With a remarkable 22 years of experience, Mr. Joseph is considered a leader in the maritime logistics industry, providing expert insights and strategic direction in all areas of his business. His forward-thinking approach and dedication to the highest standards of service have earned him multiple certifications and accolades.
</p>

<p className='mt-4 text-lg font-semibold italic'>CERTIFICATES OBTAINED</p>
<ul className='flex flex-wrap'>
  <li className='w-1/2  flex items-center text-medium italic'>
    <span className='mr-2 text-lg font-semibold italic'>•</span> Masters Unlimited (Greece)
  </li>
  <li className='w-1/2  flex items- text- italic'>
    <span className='mr-2 text-lg font-semibold italic'>•</span> MASTERS UNLIMITED (HONDURAS)
  </li>
  <li className='w-1/2  flex items- text- italic'>
    <span className='mr-2 text-lg font-semibold italic'>•</span> MASTERS 300GRT (CDC-NIMASA)
  </li>
  <li className='w-1/2  flex items- text- italic'>
    <span className='mr-2 text-lg font-semibold italic'>•</span> D.P ADVANCED SIMULATION CERT (INDIA)
  </li>
  <li className='w-1/2  flex items- text- italic'>
    <span className='mr-2 text-lg font-semibold italic'>•</span> D.P BASIC CERTIFICATE (INDIA)
  </li>
  <li className='w-1/2  flex items- text- italic'>
    <span className='mr-2 text-lg font-semibold italic'>•</span> GMDSS (HONDURAS)
  </li>
  <li className='w-1/2  flex items- text- italic'>
    <span className='mr-2 text-lg font-semibold italic'>•</span> ANCHOR HANDLING CERTIFICATE (INDIA)
  </li>
  <li className='w-1/2  flex items- text- italic'>
    <span className='mr-2 text-lg font-semibold italic'>•</span> RISK ASSESSMENT (INDIA)
  </li>
  <li className='w-1/2  flex items- text- italic'>
    <span className='mr-2 text-lg font-semibold italic'>•</span> HUET (INDIA)
  </li>
  <li className='w-1/2  flex items- text- italic'>
    <span className='mr-2 text-lg font-semibold italic'>•</span> BOSIET (GREECE)
  </li>
</ul>


    </div>
  </div>
</div>

      
      
    </div>
  );
};

export default About;
