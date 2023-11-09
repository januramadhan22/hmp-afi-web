import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import Topnav from "../components/navigation/Topnav";
import EventCard from "../components/card/EventCard";
import Information from "../components/footer/Information";
import Copyright from "../components/footer/Copyright";
import ColumnContainer from "../components/container/ColumnContainer";
import RowContainer from "../components/container/RowContainer";
import EventModal from "../components/modal/EventModal";
import { EVENTS } from "../utils/constant";

import TeamIllustration from "../assets/team_illustration.png";
import ToastIllustration from "../assets/toast_illustration.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
  document.title = "HOMEPAGE";
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <>
      <div className="relative flex flex-col w-full min-h-screen">
        <Topnav />

        {/* Header Jumbotron */}
        <ColumnContainer>
          <div className="absolute bottom-0 z-0 md:w-3/4 lg:w-2/4">
            <img src={TeamIllustration} alt="Team" title="Team" />
          </div>
          <h1 className="relative z-10 max-w-4xl text-5xl font-bold text-center uppercase">
            Welcome to <span className="text-blue-500">AFI</span>
          </h1>
          <h3 className="relative z-10 max-w-4xl text-3xl font-semibold text-center">
            Opening the door of wisdom in the horizon of faith.
          </h3>
          <div className="relative z-10 flex flex-row gap-8">
            <button
              onClick={() => (window.location.href = "#events")}
              className="px-5 py-2 font-medium text-white transition-all ease-out bg-blue-500 border-2 border-blue-500 rounded-md w-fit hover:shadow-lg hover:scale-105"
            >
              Our Events
            </button>
            <button
              onClick={() => navigate("/about-us")}
              className="px-5 py-2 font-medium text-blue-500 transition-all ease-out bg-white border-2 border-blue-500 rounded-md w-fit hover:shadow-lg hover:scale-105"
            >
              Our Story
            </button>
          </div>
        </ColumnContainer>

        {/* Space Content */}
        <div className="flex items-center justify-center w-full p-10 bg-slate-500">
          <h1 className="text-3xl font-semibold text-center text-white">
            HMP Aqidah & Filsafat Islam
          </h1>
        </div>

        {/* Feedback Content */}
        <RowContainer>
          <div className="flex flex-col justify-center w-full gap-8 md:w-6/12 px-">
            <h1 className="text-5xl font-semibold text-center md:text-left">
              Share Your Feedback and Aspiration!
            </h1>
            <div className="flex flex-col items-center gap-6 md:items-start">
              <h3 className="text-2xl text-center md:text-left text-slate-500">
                <b className="text-blue-600">Your satisfaction</b> as a family
                of{" "}
                <b className="text-blue-600">Islamic Faith and Philosophic</b>{" "}
                is our top priorities. Express your voice and aspiration,{" "}
                <b>helps us do better.</b>
              </h3>
              <button
                onClick={() => navigate("/aspiration")}
                className="px-5 py-2 font-medium text-white transition-all ease-out bg-blue-500 border-2 border-blue-500 rounded-md w-fit hover:shadow-lg hover:scale-105"
              >
                Tell Us
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center w-full md:w-6/12">
            <img
              src={ToastIllustration}
              alt="Toast"
              title="Tell Us"
              className="object-contain aspect-auto hover:animate-pulse"
            />
          </div>
        </RowContainer>

        {/* Event List */}
        <ColumnContainer id={"events"}>
          <div className="space-y-4">
            <h1 className="text-5xl font-semibold text-center">Events</h1>
            <h3 className="text-2xl text-center">
              Our activities to improve our value
            </h3>
          </div>
          <div className="w-full md:my-14 lg:my-20 lg:w-10/12">
            <Slider {...settings} className="flex justify-center">
              {EVENTS.map((item, index) => (
                <EventCard
                  key={index}
                  eventTitle={item.title}
                  eventImage={item.photo}
                  eventSection={item.section}
                  handleOpen={() => {
                    setIsModal(true);
                    setSelectedEvent(item);
                  }}
                />
              ))}
            </Slider>
          </div>
        </ColumnContainer>

        {/* Footer */}
        <footer className="flex flex-col w-full md:mt-8">
          <Information />
          <Copyright />
        </footer>
      </div>

      <EventModal
        isModal={isModal}
        onClose={() => {
          setIsModal(false);
          setSelectedEvent(null);
        }}
        selectedEvent={selectedEvent}
      />
    </>
  );
}

export default HomePage;
