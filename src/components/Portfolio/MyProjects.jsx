import React from "react";
import { Tabs } from "./Tabs";
import { motion } from "framer-motion";
import { tabs } from "./Tab";
import { Meteors } from "../About/Beams";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const animationVariants = {
  initials: { scale: 0, opacity: 0 },
  animated: { scale: 1, opacity: 1 },
};

function MyProjects() {
  return (
    <motion.div
      className="S relative"
      style={{ backgroundColor: "linear-gradient(180deg, #111132, #505064)" }}
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="w-full  mt-12 flex flex-col items-center ">
        <p className=" text-5xl font-semibold text-white">My Projects</p>
        <motion.div
          className="w-1/6 h-1 bg-green-200 mt-3"
          initial="initials"
          animate="animated"
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>
      <div className="w-full md:h-screen sm:h-screen  flex flex-col mt-8 items-center">
        <Tabs tabs={tabs} />
        {/* <h1>Hi</h1> */}
      </div>
      {/* <Meteors number={30} className="absolute" /> */}
    </motion.div>
  );
}

export default MyProjects;
