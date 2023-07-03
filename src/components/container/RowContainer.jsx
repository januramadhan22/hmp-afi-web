import React from "react";

function RowContainer({ children }) {
  return (
    <section className="relative flex flex-row flex-wrap md:flex-nowrap justify-center items-center w-full min-h-[90vh] md:min-h-[60vh] lg:min-h-screen gap-4 md:gap-4 lg:gap-8 px-10 md:px-14 lg:px-20 py-14">
      {children}
    </section>
  );
}

export default RowContainer;
