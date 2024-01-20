import React from "react";
import { Meteors } from "./Beams";

import { Lightbulb, Responsive, Rocket, Speed } from "../../Icons/Icons";
import AboutMeCard from "./AboutMeCard";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import ProgressCard from "./ProgressCard";
function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants1 = {
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
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      variants={variants1}
      initial="initial"
      whileInView="animate"
      className="w-full h-full relative  sm:p-1"
      style={{ background: "linear-gradient(180deg, #111132, #0c0c1d)" }}
    >
      <motion.div
        className="w-full custom-sm:h-2/5 sm:h-2/5 absolute sm:top-2 custom-sm:top-2 items-center   custom-sm:grid custom-sm:grid-cols-2 sm:flex sm:gap-4 custom-sm:text-center  justify-evenly"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <AboutMeCard
          children={<Speed />}
          title="Fast"
          subtitle="Fast load times and lag free interaction, my highest priority."
        />
        <AboutMeCard
          children={<Responsive />}
          title="Responsive"
          subtitle="My layouts will work on any device, big or small."
        />
        <AboutMeCard
          children={<Lightbulb />}
          title="Intuitive"
          subtitle="Strong preference for easy to use, intuitive UX/UI"
        />
        <AboutMeCard
          children={<Rocket />}
          title="Dynamic"
          subtitle="Websites don't have to be static, I love making pages come to life."
        />
      </motion.div>
      <div className="w-screen h-1/2 flex flex-col custom-sm:flex-wrap  sm:bottom-20 custom-sm:bottom-10 absolute items-center  ">
        <div className="sm:w-1/2 flex flex-col justify-center custom-sm:w-[90%]">
          <ProgressCard title={"HTML"} value="78%" />
          <ProgressCard title={"CSS"} value="78%" />
          <ProgressCard title={"Javascript"} value="72%" />
          <ProgressCard title={"React"} value="70%" />
          <ProgressCard title={"Tailwind"} value="78.8%" />
          <ProgressCard title={"NodeJS"} value="70%" />
          <ProgressCard title={"Python"} value="25%" />
          <ProgressCard title={"MongoDB"} value="60%" />
          <ProgressCard title={"Java"} value="20%" />
          <ProgressCard title={"ExpressJS"} value="50%" />
          <ProgressCard title={"Next JS"} value="25%" />
        </div>
      </div>

      <Meteors number={25} className="absolute " />
    </motion.div>
  );
}

export default About;
