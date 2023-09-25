import React from "react";
import Topnav from "../components/navigation/Topnav";
import ColumnContainer from "../components/container/ColumnContainer";
import Information from "../components/footer/Information";
import Copyright from "../components/footer/Copyright";

function AboutUsPage() {
  document.title = "ABOUT US";

  return (
    <div className="relative flex flex-col w-full min-h-screen">
      <Topnav />

      <ColumnContainer>
        <div className="flex flex-col max-w-3xl gap-5 text-center">
          <h1 className="text-5xl font-bold text-center">Who Are We?</h1>
          <p className="text-xl leading-10 font-base">
            <b>Himpunan Aqidah & Filsafat Islam</b> commonly abbreviated as{" "}
            <b>HMPAFI</b> is an Association of Islamic faith and philosophy
            Student at Islamic University of Sunan Ampel Surabaya (UINSA),
            established to <b>provide a platform</b> for{" "}
            <i>Keluarga Besar Mahasiswa Aqidah & Filsafat Islam</i> in the
            fields of academics, non-academics, and other related purposes.
          </p>
        </div>
      </ColumnContainer>

      {/* Footer */}
      <footer className="flex flex-col w-full md:mt-8">
        <Information />
        <Copyright />
      </footer>
    </div>
  );
}

export default AboutUsPage;
