import React from "react";
import Topnav from "../components/navigation/Topnav";
import Information from "../components/footer/Information";
import Copyright from "../components/footer/Copyright";
import ColumnContainer from "../components/container/ColumnContainer";
import { useEffect } from "react";
import { showFlashMessage } from "../utils/hooks";

function AspirationPage() {
  const flashMessages = ["HMP Aqidah & Filsafat Islam", "ASPIRATION"]; // Add your messages here

  useEffect(() => {
    showFlashMessage(flashMessages);
  }, []);

  return (
    <div className="relative flex flex-col w-full min-h-screen">
      <Topnav />

      <ColumnContainer>
        <h1 className="text-5xl font-bold text-center">Aspiration Place</h1>
        <p className="text-2xl text-center">
          Give us your aspirations for better generations
        </p>
        <div className="flex flex-row gap-4 h-fit">
          <form className="flex flex-col w-full gap-2">
            <label className="text-xl font-semibold">Email Address</label>
            <input
              type="email"
              placeholder="Type your email address..."
              className="border max-w-[500px] w-[500px] h-14 px-4 py-2 text-xl rounded-md bg-slate-100 focus:outline-blue-400 transition-colors ease-in duration-300 border-slate-400 focus:bg-blue-50"
            />
            <label className="mt-6 text-xl font-semibold">Message</label>
            <textarea
              placeholder="Type your message..."
              className="border max-w-[500px] h-[300px] w-[500px]  px-4 py-2 text-xl rounded-md bg-slate-100 focus:outline-blue-400 focus:bg-blue-50 transition-colors ease-in duration-300 border-slate-400"
            />
            <button className="px-6 py-3 mt-4 text-lg font-bold text-white transition-all ease-in bg-blue-600 rounded-lg hover:brightness-125 active:brightness-95">
              Submit
            </button>
          </form>
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

export default AspirationPage;
