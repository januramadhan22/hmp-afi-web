import React, { useEffect, useState } from "react";
import { send } from "@emailjs/browser";

import Topnav from "../components/navigation/Topnav";
import ColumnContainer from "../components/container/ColumnContainer";
import Information from "../components/footer/Information";
import Copyright from "../components/footer/Copyright";
import CustomForm from "../components/form/CustomForm";
import CustomButton from "../components/button/CustomButton";
import { handleSendMessage } from "../utils/hooks";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function ContactUsPage() {
  document.title = "CONTACT US";
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    subject: "",
    email: "",
    message: "",
  });

  return (
    <div className="relative flex flex-col w-full min-h-screen">
      <Topnav />

      <ColumnContainer>
        <h1 className="relative z-10 max-w-4xl text-5xl font-bold leading-relaxed text-center uppercase">
          We're here to <span className="text-blue-500">collaborate</span>.
          <br />
          Let's <span className="text-blue-500">Discuss!</span>
        </h1>
        <div className="flex flex-col gap-4">
          <CustomForm
            label={"Fullname"}
            type={"text"}
            placeholder={"Type your fullname.."}
            onChange={(e) =>
              setFormData({ ...formData, fullname: e.target.value })
            }
            value={formData.fullname}
          />
          <CustomForm
            label={"Email Address"}
            type={"email"}
            placeholder={"Type your email address.."}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
          />
          <CustomForm
            label={"Subject"}
            type={"text"}
            placeholder={"Type your subject.."}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            value={formData.subject}
          />
          <CustomForm
            isTextArea={true}
            label={"Message"}
            placeholder={"Type your message.."}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            value={formData.message}
          />
          <CustomButton
            label={"Submit"}
            isLoading={isLoading}
            onSubmit={() =>
              handleSendMessage(
                formData.subject,
                formData.fullname,
                formData.message,
                formData.email,
                setIsLoading,
                setFormData
              )
            }
          />
        </div>
      </ColumnContainer>

      {/* Footer */}
      <footer className="flex flex-col w-full md:mt-8">
        <Information />
        <Copyright />
      </footer>
      <ToastContainer />
    </div>
  );
}

export default ContactUsPage;
