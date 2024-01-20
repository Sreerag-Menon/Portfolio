import React from "react";
import { animate, motion } from "framer-motion";

function ProgressCard({ title, value }) {
  return (
    <div className="w-full flex bg-gray-100 items-center rounded-sm mb-4">
      <p className=" custom-sm:font-medium sm:font-semibold custom-sm:w-1/5 sm:p-1 custom-sm:p-[2px]  custom-sm:text-xs sm:text-sm flex justify-center text-white bg-[#04C2C9] overflow-hidden">
        {title}
      </p>
      <motion.div
        className=" bg-[#00A1A7] h-full flex justify-start   "
        // animate={{ width: `${value}` }}
        whileInView={{ width: `${value}` }}
        transition={{ duration: 1.5 }}
      >
        {" "}
      </motion.div>
    </div>
  );
}

export default ProgressCard;
