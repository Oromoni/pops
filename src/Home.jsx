import React from "react";
import video from "../src/asset/video.mp4";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="min-h-screen w-full relative !scroll-smooth">
      <video
        src={video}
        autoPlay
        muted
        loop
        className="object-cover h-96 w-full sm:h-[450px] pointer-events-none "></video>
      <Hero />
      
    </div>
  );
};

export default Home;
