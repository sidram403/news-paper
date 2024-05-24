import React from "react";
import Logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="w-full flex px-4 py-4 md:px-32 md:py-4 flex-col h-auto bg-red-700 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="py-2 px-2 bg-white mb-4 md:mb-0">
          <img src={Logo} alt="logo" className="w-28 h-10" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-20">
          <div className="mb-4 md:mb-0">
            <ul className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-4">
              <li className="md:mr-12 cursor-pointer hover:underline mb-2 md:mb-0">होम</li>
              <li className="md:mr-12 cursor-pointer hover:underline mb-2 md:mb-0">पढ़िए</li>
              <li className="md:mr-12 cursor-pointer hover:underline mb-2 md:mb-0">देखिये</li>
              <li className="md:mr-12 cursor-pointer hover:underline mb-2 md:mb-0">हिन्दी</li>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-4 md:gap-8">
            <SearchIcon />
            <button className="bg-white py-2 px-8 rounded-3xl text-black cursor-pointer">
              लॉगिन करें
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
