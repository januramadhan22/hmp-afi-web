import React from "react";
import Topnav from "../components/navigation/Topnav";
import ColumnContainer from "../components/container/ColumnContainer";
import Information from "../components/footer/Information";
import Copyright from "../components/footer/Copyright";

function AboutUsPage() {
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

export default AboutUsPage;
