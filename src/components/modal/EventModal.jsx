import { Box, Modal } from "@mui/material";
import React from "react";
import Slider from "react-slick";

function EventModal({ isModal, onClose, selectedEvent }) {
  const sliderModals = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Modal
      open={isModal}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: 400,
          maxWidth: 790,
          maxHeight: "85%",
          bgcolor: "#FFF",
          border: "2px solid #f3f3f3",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          overflow: "clip",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="mb-4 text-2xl font-semibold text-center">
          {selectedEvent?.title}
        </h1>
        <div className="items-center w-[320px] lg:w-[420px]">
          <Slider {...sliderModals}>
            {selectedEvent?.photo.map((step, index) => (
              <div key={index} className="p-2">
                <img
                  className="w-[320px] h-[240px] object-cover rounded-md lg:h-[280px] lg:w-[420px]"
                  src={step}
                  alt={selectedEvent?.title}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex flex-col lg:w-[420px] max-h-[160px] gap-2 mt-8 overflow-y-auto text-left">
          <p className="text-base font-medium text-justify text-gray-600">
            {selectedEvent?.description}
          </p>
        </div>
      </Box>
    </Modal>
  );
}

export default EventModal;
