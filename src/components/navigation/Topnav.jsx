import React from "react";
import { MENU_BAR } from "../../utils/constant";
import { useNavigate } from "react-router-dom";

import AFILogo from "../../assets/afi_logo.png";

function Topnav() {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50 flex flex-row items-center justify-between w-full px-20 py-4 bg-white max-h-20">
      <div className="flex flex-row items-center gap-2 cursor-pointer group">
        <img
          src={AFILogo}
          alt="Aqidah dan Filsafat Islam"
          title="Aqidah dan Filsafat Islam"
          className="w-12 transition-all ease-in group-hover:drop-shadow-md"
        />
        <div className="flex flex-col text-base font-semibold leading-5">
          <span className="transition-all ease-in group-hover:drop-shadow-md text-slate-500">
            Himpunan Mahasiswa
          </span>
          <span className="text-blue-500 transition-all ease-in group-hover:drop-shadow-md">
            Aqidah <span className="text-slate-500">&</span> Filsafat Islam
          </span>
        </div>
      </div>

      <ul className="flex flex-row gap-8 font-medium">
        {MENU_BAR.map((menu, index) => (
          <li
            key={index}
            onClick={() => navigate(menu)}
            className="capitalize transition-all duration-200 ease-linear cursor-pointer text-slate-900 hover:text-blue-400 hover:drop-shadow-md"
          >
            {menu}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Topnav;
