import React from "react";
import { SOCIAL_MEDIA } from "../../utils/constant";

import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

function Information() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-between w-full gap-8 px-10 py-8 transition-all duration-200 ease-linear bg-blue-900 md:flex-nowrap md:gap-14 md:px-14 lg:px-20">
      <div className="w-full space-y-2">
        <h2 className="text-2xl font-medium text-center text-white md:text-left">
          Himpunan Mahasiswa Aqidah & Filsafat Islam
          <br />
          UIN Sunan Ampel Surabaya
        </h2>
        <p className="text-base text-center text-white md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          et aperiam non eos dicta blanditiis?
        </p>
      </div>
      <div className="flex items-center justify-center w-full gap-8 md:w-fit">
        {SOCIAL_MEDIA.map((media, index) => (
          <Tooltip title={media.name} arrow key={index} placement="top">
            <a href={media.link}>
              {media.name === "instagram" ? (
                <Instagram className="text-white transition-all duration-300 ease-linear cursor-pointer hover:text-blue-200 hover:drop-shadow-md " />
              ) : media.name === "facebook" ? (
                <Facebook className="text-white transition-all duration-300 ease-linear cursor-pointer hover:text-blue-200 hover:drop-shadow-md " />
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
