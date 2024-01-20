import React from "react";
import { motion } from "framer-motion";

function List() {
  const items = ["Home", "About", "Portfolio", "Contact Me"];

  const variants2 = {
    open: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {},
    },
    closed: {
      y: 0,
      x: -800,
      opacity: 0,
      transition: {
        damping: 400,
      },
    },
  };

  return (
    <motion.li className="list-none custom-sm:flex " variants={variants2}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          className="sm:mr-10 custom-sm:mr-2 sm:text-lg custom-sm:text-base  "
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.li>
  );
}

export default List;
