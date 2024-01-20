import React from "react";
import { Sparkles } from "./Sparkles";
import { TypewriterEffectSmooth } from "./Typewriter";
import { motion } from "framer-motion";

function Home() {
  const words = [
    {
      text: "I'm",
    },
    {
      text: "a",
    },
    {
      text: "full-stack",
    },

    {
      text: "web",
    },
    {
      text: "developer.",
    },
  ];
  const variants = {
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  return (
    <div
      className="relative  w-full  flex flex-col items-center justify-center overflow-hidden rounded-md "
      style={{ height: "calc(100vh - 100px)" }}
    >
      <div className="w-full absolute inset-0 h-screen">
        <Sparkles
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="w-full justify-center  flex flex-col items-center mb-40 ">
        <h2 className="text-white flex  custom-sm:text-xl sm:text-3xl mr-3 select-none">
          Hello, I'm{" "}
          <p className="ml-2 text-4xl text-[#E31B6D] custom-sm:text-xl sm:text-3xl">
            Sreerag Menon.{" "}
          </p>
        </h2>
        <TypewriterEffectSmooth words={words} />
      </div>
      <a href="#About" className="w-full flex justify-center items-center">
        <motion.img
          src="/scroll.png"
          alt="scroll"
          className="absolute bottom-0 mb-40 custom-sm:w-12 custom-sm:h-12 cursor-pointer"
          variants={variants}
          animate="scrollButton"
        />
      </a>
    </div>
  );
}

export default Home;
