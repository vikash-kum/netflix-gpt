import React from "react";
import VideoBackground from "./VideoBackground";

const Dialog = ({ movieId, isOpen, onClose }) => {
  const handleCancel = () => {
    onClose();
  };

  return (
    <div
      className={`fixed overflow-auto inset-4 z-5 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-between bg-white rounded-lg p-2">
        <h2 className="text-lg font-semibold">Dialog Title</h2>
        <p className="text-3xl font-bold" onClick={handleCancel}>
          X
        </p>
      </div>
      <div>
        <VideoBackground movieId={movieId} />
      </div>
    </div>
  );
};

export default Dialog;
