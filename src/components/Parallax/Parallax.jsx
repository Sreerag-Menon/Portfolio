import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Parallax({ type }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div
      className="w-full h-full absolute flex justify-center items-center overflow-hidden "
      ref={ref}
      style={{
        background:
          type === "about"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1
        className="sm:text-[100px] custom-sm:text-[50px]"
        style={{ y: yText }}
      >
        {type === "about" ? "About" : "Portfolio"}
      </motion.h1>
      <motion.div
        style={{ backgroundImage: 'url("/mountains.png")' }}
        className="sm:bg-cover bg-bottom w-full h-full absolute z-[3] custom-sm:bg-contain custom-sm:bg-no-repeat "
      ></motion.div>
      <motion.div
        style={{
          backgroundImage: `url(${
            type === "about" ? "/planets.png" : "/sun.png"
          })`,
          y: yBg,
        }}
        className="sm:bg-cover bg-bottom w-full h-full absolute z-[2] custom-sm:bg-contain custom-sm:bg-no-repeat"
      ></motion.div>
      <motion.div
        style={{ backgroundImage: 'url("/stars.png")', x: yBg }}
        className="sm:bg-cover bg-bottom w-full h-full absolute z-[1] "
      ></motion.div>
    </div>
  );
}

export default Parallax;
