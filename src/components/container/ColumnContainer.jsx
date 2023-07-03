import React from "react";

function ColumnContainer({ children }) {
  return (
    <section className="relative flex flex-col items-center w-full gap-8 px-10 md:px-14 lg:px-20 min-h-[90vh] md:min-h-[60vh] lg:min-h-screen py-14">
      {children}
    </section>
  );
}

export default ColumnContainer;
