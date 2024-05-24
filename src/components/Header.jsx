import React from "react";
import Logo from "../assets/logo.png";

import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="flex px-32 py-4 flex-col h-[100px] bg-red-700 text-white">
      <div className="flex justify-between items-center">
        <div className="py-2 px-2 bg-white">
          <img src={Logo} alt="logo" className="w-28 h-10" />
        </div>
        <div className="flex justify-between items-center gap-20">
          <div>
            <ul className="flex items-center justify-btween mx-4">
              <li className="mr-24 cursor-pointer hover:underline">होम</li>
              <li className="mr-24 cursor-pointer hover:underline">पढ़िए</li>
              <li className="mr-24 cursor-pointer hover:underline">देखिये</li>
              <li className="mr-24 cursor-pointer hover:underline">हिन्दी</li>
            </ul>
          </div>
          <div className="flex justify-between items-center gap-8">
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
