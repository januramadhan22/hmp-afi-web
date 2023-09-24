import React from "react";

function CustomButton({ label, isLoading, onSubmit }) {
  return (
    <button
      onClick={onSubmit}
      className={`px-6 py-3 mt-4 text-lg font-bold transition-all ease-in rounded-lg hover:brightness-125 active:brightness-95 ${
        isLoading ? "bg-slate-600 text-slate-800" : "bg-blue-600 text-white"
      }`}
    >
      {!isLoading ? label : "Submiting.."}
    </button>
  );
}

export default CustomButton;
