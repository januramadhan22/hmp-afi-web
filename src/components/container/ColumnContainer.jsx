import React from "react";

function ColumnContainer({ children }) {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen gap-8 px-20 py-14">
      {children}
    </div>
  );
}

export default ColumnContainer;
