import React from "react";
import Topnav from "../components/navigation/Topnav";
import ColumnContainer from "../components/container/ColumnContainer";
import Information from "../components/footer/Information";
import Copyright from "../components/footer/Copyright";
import RowContainer from "../components/container/RowContainer";
import Slider from "react-slick";
import { TEAMS } from "../utils/teamsData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutUsPage() {
  document.title = "ABOUT US";

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative flex flex-col w-full min-h-screen">
      <Topnav />

      <ColumnContainer>
        <div className="flex flex-col max-w-3xl gap-5 text-center">
          <h1 className="text-5xl font-bold text-center">Who Are We?</h1>
          <p className="text-xl leading-10 font-base">
            <b>Himpunan Aqidah & Filsafat Islam</b> commonly abbreviated as{" "}
            <b>HMPAFI</b> is an Association of Islamic faith and philosophy
            Student at Islamic University of Sunan Ampel Surabaya (UINSA),
            established to <b>provide a platform</b> for{" "}
            <i>Keluarga Besar Mahasiswa Aqidah & Filsafat Islam</i> in the
            fields of academics, non-academics, and other related purposes.
          </p>
        </div>
      </ColumnContainer>

      <div className="flex justify-center w-full">
        <Slider {...settings} className="flex justify-center max-w-screen-lg">
          {TEAMS.map((item, index) => (
            <div key={index} className="flex flex-col w-full">
              <h1 className="mb-8 text-3xl font-semibold text-center">
                {item?.division}
              </h1>
              <div className="flex flex-wrap justify-center w-full gap-6">
                {item?.member?.map((member, idx) => (
                  <div
                    className={`flex-col items-center ${
                      idx > 2 ? "w-[200px]" : "w-[280px]"
                    }`}
                  >
                    <div key={idx} className={`h-auto rounded-md `}>
                      <img
                        src={member?.photo}
                        className="object-cover w-full h-[320px] rounded-md shadow-lg"
                      />
                    </div>
                    <h3 className="px-4 text-center">{member.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Footer */}
      <footer className="flex flex-col w-full md:mt-8">
        <Information />
        <Copyright />
      </footer>
    </div>
  );
}

export default AboutUsPage;
