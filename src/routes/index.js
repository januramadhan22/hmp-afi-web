import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AspirationPage from "../pages/AspirationPage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/home" element={<HomePage />} />

        <Route path="/aspiration" element={<AspirationPage />} />

        <Route path="/about-us" element={<AboutUsPage />} />

        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
