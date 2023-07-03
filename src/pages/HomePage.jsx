import React from "react";
import Slider from "react-slick";
import Topnav from "../components/navigation/Topnav";
import Container from "../components/container/Container";
import TeamIllustration from "../assets/team_illustration.png";
import ToastIllustration from "../assets/toast_illustration.png";
import EventCard from "../components/card/EventCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Information from "../components/footer/Information";
import Copyright from "../components/footer/Copyright";

function HomePage() {
  const events = [1, 2, 3, 4, 5];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="relative flex flex-col w-full min-h-screen">
      <Topnav />

      {/* Header Jumbotron */}
      <Container>
        <div className="absolute bottom-0 z-0 w-2/4">
          <img src={TeamIllustration} alt="Team" title="Team" />
        </div>
        <h1 className="max-w-4xl text-5xl font-semibold text-center">
          Lorem ipsum dolor sit amet.
        </h1>
        <h3 className="max-w-4xl text-2xl text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quo
          ullam in beatae ea illo.
        </h3>
        <div className="relative z-10 flex flex-row gap-8">
          <button className="px-5 py-2 font-medium text-white transition-all ease-out bg-blue-500 border-2 border-blue-500 rounded-md w-fit hover:shadow-lg hover:scale-105">
            Our Events
          </button>
          <button className="px-5 py-2 font-medium text-blue-500 transition-all ease-out bg-white border-2 border-blue-500 rounded-md w-fit hover:shadow-lg hover:scale-105">
            Our Story
          </button>
        </div>
      </Container>

      {/* Space Content */}
      <div className="flex items-center justify-center w-full p-10 bg-slate-500">
        <h1 className="text-3xl font-semibold text-center text-white">
          Lorem, ipsum dolor.
        </h1>
      </div>

      {/* Feedback Content */}
      <section className="flex w-full min-h-screen gap-8 px-20 py-14">
        <div className="flex flex-col justify-center w-6/12 gap-8 px-">
          <h1 className="text-5xl font-semibold text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <div className="space-y-6">
            <h3 className="text-2xl text-left text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              praesentium fugiat id.
            </h3>
            <button className="px-5 py-2 font-medium text-white transition-all ease-out bg-blue-500 border-2 border-blue-500 rounded-md w-fit hover:shadow-lg hover:scale-105">
              Tell Us
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-6/12">
          <img
            src={ToastIllustration}
            alt="Toast"
            title="Tell Us"
            className="object-contain aspect-auto hover:animate-pulse"
          />
        </div>
      </section>

      <Container>
        <div className="space-y-4">
          <h1 className="text-5xl font-semibold text-center">Events</h1>
          <h3 className="text-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </h3>
        </div>
        <div className="w-10/12 my-20">
          <Slider {...settings}>
            {events.map((item, index) => (
              <EventCard key={index} />
            ))}
          </Slider>
        </div>
        <div className="flex flex-col items-center max-w-3xl gap-8 px-10 py-6 text-center bg-blue-700 rounded-xl drop-shadow-md">
          <h1 className="text-5xl font-bold text-white">Let's Make Benefits</h1>
          <h3 className="w-10/12 text-2xl font-medium text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, vel.
          </h3>
          <button className="px-5 py-2 font-medium text-blue-500 transition-all ease-out bg-white border-2 border-blue-700 rounded-md w-fit hover:shadow-lg hover:scale-105">
            Our Events
          </button>
        </div>
      </Container>

      {/* Footer */}
      <footer className="flex flex-col w-full">
        <Information />
        <Copyright />
      </footer>
    </div>
  );
}

export default HomePage;
