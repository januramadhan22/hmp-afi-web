import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AccountBox, Home, Phone, SpatialAudioOff } from "@mui/icons-material";

import { MENU_BAR } from "../../utils/constant";

import AFILogo from "../../assets/afi_logo.png";

function Topnav() {
  const { pathname } = useLocation();
  const [transition, setTransition] = useState(false);

  const navbarTransition = () => {
    if (window.scrollY > 64) {
      setTransition(true);
    } else {
      setTransition(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarTransition);
    return () => window.removeEventListener("scroll", navbarTransition);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 flex flex-row items-center justify-between w-full px-10 md:px-14 lg:px-20 py-4 bg-white max-h-20 ${
        transition && "drop-shadow-md"
      }`}
    >
      <div className="flex flex-row items-center gap-2 cursor-pointer group">
        <img
          src={AFILogo}
          alt="Aqidah dan Filsafat Islam"
          title="Aqidah dan Filsafat Islam"
          className="w-12 transition-all ease-in group-hover:drop-shadow-md"
        />
        <div className="flex-col hidden text-base font-semibold leading-5 md:flex">
          <span className="transition-all ease-in group-hover:drop-shadow-md text-slate-500">
            Himpunan Mahasiswa
          </span>
          <span className="text-blue-500 transition-all ease-in group-hover:drop-shadow-md">
            Aqidah <span className="text-slate-500">&</span> Filsafat Islam
          </span>
        </div>
      </div>

      <ul className="flex flex-row gap-6 font-medium md:gap-8">
        {MENU_BAR.map((menu, index) => (
          <li key={index}>
            <a
              href={menu}
              className={`hidden md:block capitalize transition-all duration-200 ease-linear cursor-pointer hover:text-blue-400 hover:drop-shadow-md ${
                pathname.slice(1, pathname.length) === menu
                  ? "text-blue-400 drop-shadow-md"
                  : "text-slate-900"
              }`}
            >
              {menu}
            </a>
            <a
              title={menu}
              href={menu}
              className={`block md:hidden capitalize transition-all duration-200 ease-linear cursor-pointer hover:text-blue-400 hover:drop-shadow-md ${
                pathname.slice(1, pathname.length) === menu
                  ? "text-blue-400 drop-shadow-md"
                  : "text-slate-900"
              }`}
            >
              {menu === "home" ? (
                <Home
                  fontSize="small"
                  className={`transition-all duration-200 ease-linear hover:text-blue-400 hover:drop-shadow-md ${
                    pathname.slice(1, pathname.length) === menu
                      ? "text-blue-400 drop-shadow-md"
                      : "text-slate-900"
                  }`}
                />
              ) : menu === "aspiration" ? (
                <SpatialAudioOff
                  fontSize="small"
                  className={`transition-all duration-200 ease-linear hover:text-blue-400 hover:drop-shadow-md ${
                    pathname.slice(1, pathname.length) === menu
                      ? "text-blue-400 drop-shadow-md"
                      : "text-slate-900"
                  }`}
                />
              ) : menu === "about us" ? (
                <AccountBox
                  fontSize="small"
                  className={`transition-all duration-200 ease-linear hover:text-blue-400 hover:drop-shadow-md ${
                    pathname.slice(1, pathname.length) === menu
                      ? "text-blue-400 drop-shadow-md"
                      : "text-slate-900"
                  }`}
                />
              ) : (
                menu === "contact us" && (
                  <Phone
                    fontSize="small"
                    className={`transition-all duration-200 ease-linear hover:text-blue-400 hover:drop-shadow-md ${
                      pathname.slice(1, pathname.length) === menu
                        ? "text-blue-400 drop-shadow-md"
                        : "text-slate-900"
                    }`}
                  />
                )
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Topnav;
