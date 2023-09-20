import React from "react";
import Topnav from "../components/navigation/Topnav";
import ColumnContainer from "../components/container/ColumnContainer";
import Information from "../components/footer/Information";
import Copyright from "../components/footer/Copyright";

function AboutUsPage() {
  return (
    <div className="relative flex flex-col w-full min-h-screen">
      <Topnav />

      <ColumnContainer>
        <div className="flex flex-col max-w-5xl gap-8 text-center">
          <h1 className="font-medium text-center text-7xl">Who Are We?</h1>
          <p className="text-3xl leading-[52px] font-base">
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
