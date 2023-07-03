import React from "react";

function Container({ children }) {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen gap-8 p-14">
      {children}
    </div>
  );
}

export default Container;
