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
        }}
      >
        <h1 className="mb-8 text-2xl font-semibold text-center">
          {selectedEvent?.title}
        </h1>
        <Box sx={{ width: 720 }}>
          <Slider {...sliderModals}>
            {selectedEvent?.photo.map((step, index) => (
              <div key={index} className="p-2">
                <Box
                  component="img"
                  sx={{
                    height: 500,
                    display: "block",
                    width: 720,
                    overflow: "hidden",
                    borderRadius: 2,
                    objectFit: "cover",
                  }}
                  src={step}
                  alt={selectedEvent?.title}
                />
              </div>
            ))}
          </Slider>
        </Box>
        <div className="flex flex-col w-full h-[160px] gap-3 mt-8 overflow-y-scroll text-left">
          <h3 className="text-xl font-semibold">{selectedEvent?.title}</h3>
          <p className="text-lg font-medium text-gray-600">
            {selectedEvent?.description}
          </p>
        </div>
      </Box>
    </Modal>
  );
}

export default EventModal;
