import React from "react";

function EventCard({ eventImage, eventTitle, eventSection }) {
  return (
    <div className="w-[320px] h-[440px] bg-slate-300 rounded-lg flex flex-col justify-between p-6">
      <div className="flex items-center justify-center w-full h-full">
        <h1>SportStation Image</h1>
      </div>
      <div className="w-full h-fit">
        <h3 className="text-lg font-semibold tracking-widest uppercase">
          SportStation
        </h3>
        <p className="text-base font-medium tracking-widest uppercase">Sport</p>
      </div>
    </div>
  );
}

export default EventCard;
