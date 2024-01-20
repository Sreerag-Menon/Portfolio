import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToggleBtn, ToggleCloseBtn } from "../../Icons/Icons";
import { motion, AnimatePresence } from "framer-motion";
import List from "./List/List";

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleFn = () => {
    setOpen((prev) => !prev);
  };

  const variants = {
    open: {
      clipPath: "circle(3000px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(26px at 50px 50px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 50,
      },
    },
  };

  return (
    <motion.div
      className="flex   bg-none text-white h-24 w-full "
      animate={open ? "open" : "closed"}
      variants={variants}
    >
      <motion.div
        className="fixed h-24 w-full  bg-transparent z-[999]"
        variants={variants}
      >
        <motion.div className="absolute w-full h-24 flex custom-sm:justify-end   items-center sm:justify-center ">
          <List />
        </motion.div>
      </motion.div>
      <motion.button
        className="w-12 h-12 rounded-full fixed top-7 left-[38px] z-[999] bg-transparent border-none"
        onClick={toggleFn}
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <motion.path
            strokeWidth="3"
            stroke="white"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="white"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="white"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </motion.button>
    </motion.div>
  );
}
export default Navbar;
//   const [isToggle, setIsToggle] = useState(true);

//   const toggleFn = () => {
//     setIsToggle((prev) => !prev);
//   };

//   return (
//     <div className="w-full h-14 fixed items-center ">
//       <div className="toggle custom-sm:flex  w-full h-full items-center ml-9">
//         <div className="w-full flex h-full  items-center">
//           <div
//             className="bg-white w-7 flex justify-center h-7  items-center rounded-full p-1"
//             onClick={toggleFn}
//           >
//             <motion.div
//               whileTap={{
//                 scale: 0.4,
//                 rotate: 360,
//                 transition: { duration: 0.8 },
//               }}
//             >
//               {isToggle ? <ToggleBtn /> : <ToggleCloseBtn />}
//             </motion.div>
//           </div>
//           <AnimatePresence>
//             {!isToggle && (
//               <motion.div
//                 className="flex justify-evenly w-full h-full items-center text-white overflow-x-auto"
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0, transition: { duration: 0.34 } }}
//                 exit={{
//                   opacity: 0,
//                   x: -50,
//                   transition: { duration: 0.34, ease: "anticipate" },
//                 }}
//               >
//                 <NavLink
//                   to="#"
//                   style={({ isActive }) => ({
//                     color: isActive ? "red" : "white",
//                   })}
//                 >
//                   <p className="list-none ">Home</p>
//                 </NavLink>
//                 <NavLink
//                   to="#"
//                   style={({ isActive }) => ({
//                     borderBottom: isActive ? "#15b0ab solid 2px" : "",
//                   })}
//                 >
//                   <p className="list-none ">About</p>
//                 </NavLink>
//                 <NavLink
//                   to="#"
//                   style={({ isActive }) => ({
//                     borderBottom: isActive ? "#15b0ab solid 2px" : "",
//                   })}
//                 >
//                   <p className="list-none ">Portfolio</p>
//                 </NavLink>
//                 <NavLink
//                   to="#"
//                   style={({ isActive }) => ({
//                     borderBottom: isActive ? "#15b0ab solid 2px" : "",
//                   })}
//                 >
//                   <p className="list-none ">Contact Me</p>
//                 </NavLink>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//       {/* <div className="w-full h-14 flex justify-center backdrop-filter backdrop-blur-lg">
//         <div className="flex justify-between w-1/2 h-full items-center">
//           <NavLink
//             to="#"
//             style={({ isActive }) => ({
//               borderBottom: isActive ? "#15b0ab solid 2px" : "",
//             })}
//           >
//             <li className="list-none">Home</li>
//           </NavLink>
//           <NavLink
//             to="#"
//             style={({ isActive }) => ({
//               borderBottom: isActive ? "#15b0ab solid 2px" : "",
//             })}
//           >
//             <li className="list-none">About</li>
//           </NavLink>
//           <NavLink
//             to="#"
//             style={({ isActive }) => ({
//               borderBottom: isActive ? "#15b0ab solid 2px" : "",
//             })}
//           >
//             <li className="list-none">Portfolio</li>
//           </NavLink>
//           <NavLink
//             to="#"
//             style={({ isActive }) => ({
//               borderBottom: isActive ? "#15b0ab solid 2px" : "",
//             })}
//           >
//             <li className="list-none">Contact Me</li>
//           </NavLink>
//         </div>
//         </div>*/}
//     </div>
//   );
// }
