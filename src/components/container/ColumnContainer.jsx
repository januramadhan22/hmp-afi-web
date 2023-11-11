import React from "react";

function ColumnContainer({ children, id }) {
  return (
    <section
      id={id}
      className="relative flex flex-col items-center w-full h-auto gap-8 px-10 md:px-14 lg:px-20 xl:min-h-screen py-14"
    >
      {children}
    </section>
  );
}

export default ColumnContainer;
