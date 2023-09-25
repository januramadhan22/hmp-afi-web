import React from "react";
import { SOCIAL_MEDIA } from "../../utils/constant";

import { Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

function Information() {
  const ADDRESS =
    "https://www.google.com/maps/place/Jl.+Ahmad+Yani+No.117,+Jemur+Wonosari,+Kec.+Wonocolo,+Surabaya,+Jawa+Timur+60237/@-7.3216838,112.7315414,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fba97130798b:0x60a1ba701130c6c9!8m2!3d-7.3216891!4d112.7341163!16s%2Fg%2F11rny9ms09?entry=ttu";

  return (
    <div className="flex flex-row flex-wrap items-center justify-between w-full gap-8 px-10 py-8 transition-all duration-200 ease-linear bg-blue-900 md:flex-nowrap md:gap-14 md:px-14 lg:px-20">
      <div className="w-full space-y-2">
        <h2 className="text-2xl font-medium text-center text-white md:text-left">
          Himpunan Mahasiswa Aqidah & Filsafat Islam
          <br />
          UIN Sunan Ampel Surabaya
        </h2>
        <p
          onClick={() => window.open(ADDRESS, "_blank")}
          className="text-base text-center text-white transition-all ease-in cursor-pointer w-fit md:text-left hover:underline"
        >
          Jl. Ahmad Yani, Kecamatan Wonocolo No. 117, Surabaya
        </p>
      </div>
      <div className="flex items-center justify-center w-full gap-8 md:w-fit">
        {SOCIAL_MEDIA.map((media, index) => (
          <Tooltip title={media.name} arrow key={index} placement="top">
            <a href={media.link} target="_blank">
              {media.name === "instagram" ? (
                <Instagram className="text-white transition-all duration-300 ease-linear cursor-pointer hover:text-blue-200 hover:drop-shadow-md " />
              ) : media.name === "youtube" ? (
                <YouTube className="text-white transition-all duration-300 ease-linear cursor-pointer hover:text-blue-200 hover:drop-shadow-md " />
              ) : (
                <Twitter className="text-white transition-all duration-300 ease-linear cursor-pointer hover:text-blue-200 hover:drop-shadow-md " />
              )}
            </a>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

export default Information;
