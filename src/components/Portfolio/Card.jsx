import React from "react";
import { Link } from "react-router-dom";
import { Github, Website } from "../../Icons/Icons";

function Card({ title, img, desc, gitlink, varcelLink }) {
  console.log(varcelLink);
  return (
    <div class="  custom-sm:flex md:flex md:flex-col md:w-[300px] md:h-[500px] custom-sm:mb-3 rounded overflow-hidden shadow-lg md:mr-6 p-1 bg-gray-800">
      <div className="bg-black custom-sm:w-[250px] sm:w-[150px] custom-sm:h-[96px] md:w-full md:h-[300px]  overflow-hidden">
        <img
          src={img}
          alt="Sunset in the mountains"
          className="custom-sm:w-full custom-sm:h-[96px] md:w-full md:h-[300px]"
        />
      </div>
      <div class="md:px-2 md:py-2 custom-sm:flex-col custom-sm:p-0 items-center custom-sm:flex-wrap custom-sm:ml-4">
        <div class="font-bold md:text-xl   custom-sm:text-base custom-sm:font-medium custom-sm:justify-center flex flex-wrap md:mb-2 text-gray-400">
          {title}
        </div>
        <p class="text-white text-base custom-sm:text-xs md:text-base md:font-normal custom-sm:font-medium  ">
          {desc}
        </p>
      </div>
      <div class="w-[100px] flex px-3 pt-2 custom-sm:p-0 h-[53px] custom-sm:h-[10px] custom-sm:flex-col md:flex-row md:mx-3 custom-sm:mt-5 custom-sm:ml-1 md:items-center">
        {gitlink ? (
          <Link to={gitlink}>
            <Github className="custom-sm:w-6 h-6 md:w-8 md:h-8 md:mr-3" />
          </Link>
        ) : (
          ""
        )}
        {varcelLink ? (
          <Link to={varcelLink}>
            <Website className="custom-sm:w-6 h-6 md:w-8 md:h-8" />
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Card;
