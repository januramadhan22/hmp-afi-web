import React from "react";

function CustomForm({ label, placeholder, type, isTextArea, onChange, value }) {
  return (
    <form className="flex flex-col w-full gap-2">
      <label className="text-xl font-semibold">
        {label}
        <sup className="text-red-600">*</sup>
      </label>
      {!isTextArea ? (
        <input
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className="border max-w-[500px] w-[320px] md:w-[500px] h-14 px-4 py-2 text-xl rounded-md bg-slate-100 focus:outline-blue-400 transition-colors ease-in duration-300 border-slate-400 focus:bg-blue-50"
        />
      ) : (
        <textarea
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className="border max-w-[500px] h-[300px] w-[320px] md:w-[500px] px-4 py-2 text-xl rounded-md bg-slate-100 focus:outline-blue-400 focus:bg-blue-50 transition-colors ease-in duration-300 border-slate-400"
        />
      )}
    </form>
  );
}

export default CustomForm;
