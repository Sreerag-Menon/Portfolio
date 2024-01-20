import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutMeCard({ children, title, subtitle, className }) {
  return (
    <div className="w-15 h-15 p-2 custom-sm:p-1 rounded-full  flex flex-col justify-start items-center">
      <motion.div
        className={` w-15 h-15  ${className} p-2 mb-3 rounded-full`}
        whileInView={{ rotateY: 180 }}
        // whileTap={{ rotateY: 180 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
      <div className="w-full flex flex-col justify-center items-center">
        <p className="sm:text-2xl custom-sm:text-lg mb-2 font-bold">{title}</p>
        <p className="text-gray-400 sm:text-base custom-sm:justify-center sm:items-center custom-sm:text-sm ">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default AboutMeCard;
