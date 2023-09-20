import React from "react";
function EventCard({ eventImage, eventTitle, eventSection, handleOpen }) {
  return (
    <div
      onClick={handleOpen}
      className="w-[320px] h-[440px] bg-slate-300 rounded-lg flex flex-col justify-between p-6 hover:scale-95 hover:shadow-md hover:bg-white hover:border-blue-100 group hover:border hover:shadow-blue-300  cursor-pointer transition-all ease-out duration-300"
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={eventImage[0]} className="object-cover w-full h-[320px]" />
      </div>
      <div className="w-full h-fit">
        <h3 className="text-lg font-semibold tracking-widest uppercase group-hover:text-blue-600">
          {eventTitle}
        </h3>
        <p className="text-base font-medium tracking-widest uppercase">
          {eventSection}
        </p>
      </div>
    </div>
  );
}

export default EventCard;
