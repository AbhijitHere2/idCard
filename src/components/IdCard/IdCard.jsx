import React, { useState } from "react";
import "./IdCard.css";
import { FaLinkedin } from "react-icons/fa";
import { PiXLogoFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import { useMotionValue, useTransform, motion } from "framer-motion";

const IDCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [-30, 30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const [isBouncing, setIsBouncing] = useState(false);

  const handleMouseDown = () => {
    setIsBouncing(true);
  };

  const handleMouseUp = () => {
    setIsBouncing(false);
  };

  return (
    <div
      style={{ perspective: 5000}}
      className=" bg-black  flex items-center max-sm:p-5 justify-evenly p-24 max-sm:flex-col gap-5 my-5   "
    >
      <div className="w-72 p-2 h-64 space-y-2  ">
        <h1 className="text-2xl font-semibold font-sans  text-white ">
          See you online on May 23
        </h1>
        <p className="text-[10px] text-gray-400">
          You'll receive an email with all the logistical details shortly.
        </p>

        <div className="link flex ">
          <a className="text-[10px] text-gray-400" href="#">
            SHARE ON
          </a>
          <PiXLogoFill className="text-[8px] mx-1 mt-[4px] " />{" "}
          <FaLinkedin className="text-[10px]  mt-[2px] " />
        </div>
        <div className="text-[10px]">
          <a href="#" className="text-gray-400">
            NEED TO EDIT YOUR DETAILS?{" "}
          </a>
          <a href="#" className="text-slate-200">
            EDIT BADGE
          </a>
        </div>
        <div className="text-gray-400">
          ------------------------------------------
        </div>
        <div className="text-[10px]">
          <a href="#" className="text-gray-400">
            BUY YOUR TICKET AND JOIN US IN NEW YORK CITY.
          </a>
        </div>
        <button className="bg-white text-black px-6 py-2 flex hover:bg-slate-800  hover:text-white">
          BUY A TICKET <FaArrowRight className="mt-1 ml-3" />
        </button>
      </div>

      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
        className={`flex flex-col justify-center items-center bg-slate-900 rounded-lg  p-2 max-sm:m-5
             ${isBouncing ? "bounce" : ""} `}
      >
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100 }}
          className={`badgee ${isBouncing ? "bounce" : ""} z-10 `}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <motion.div  id="head" className=" text-white mt-5  ">Hubnex Educate</motion.div>
          <motion.div className="text-white p-20 m-5 bg-slate-400 rounded-[50%]"></motion.div>
          <motion.div className="badge-content space-y-1 mb-2">
            <div  id="head"  className=" text-2xl  ">Harry Potter</div>
            <div  id="head"  className="text-[8px]">VIRTUAL ATTENDEE</div>
            <div  id="head" className="badge-date text-[10px]">May 23, 2024</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IDCard;
