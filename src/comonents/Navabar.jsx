import React from "react";
import { Link } from "react-router-dom";

const Navabar = () => {
  return (
    <div className="Navabar w-full flex items-center justify-between p-2 absolute z-[100] sm:p-4 ">
      <h1 className=" text-red-600 font-bold text-2xl cursor-pointer sm:text-4xl "><Link to='/' >NETFLIX</Link></h1>
      <div>
        <button className="font-semibold text-white text-[9px] py-1 px-2 border border-red-600  border-e-red-600 mx-2 rounded-sm sm:text-[10px] sm:py-2 sm:px-4">Sign IN</button>
        <button className="font-semibold text-white text-[9px] py-1 px-2 bg-red-600 rounded-sm mx-2 sm:text-[10px] sm:py-2 sm:px-4">Sign up</button>
      </div>
    </div>
  );
};

export default Navabar;
 