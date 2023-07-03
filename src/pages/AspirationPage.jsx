import React from "react";
import Topnav from "../components/navigation/Topnav";
import Information from "../components/footer/Information";
import Copyright from "../components/footer/Copyright";
import ColumnContainer from "../components/container/ColumnContainer";

function AspirationPage() {
  return (
    <div className="relative flex flex-col w-full min-h-screen">
      <Topnav />

      <ColumnContainer>AspirationPage</ColumnContainer>

      {/* Footer */}
      <footer className="flex flex-col w-full md:mt-8">
        <Information />
        <Copyright />
      </footer>
    </div>
  );
}

export default AspirationPage;
