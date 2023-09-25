import React, { useState } from "react";
import Topnav from "../components/navigation/Topnav";
import Information from "../components/footer/Information";
import Copyright from "../components/footer/Copyright";
import ColumnContainer from "../components/container/ColumnContainer";
import { handleSendMessage } from "../utils/hooks";
import CustomForm from "../components/form/CustomForm";
import { ToastContainer } from "react-toastify";
import CustomButton from "../components/button/CustomButton";

function AspirationPage() {
  document.title = "ASPIRATION";
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
        <h1 className="text-5xl font-bold text-center">Aspiration Place</h1>
        <p className="text-2xl text-center">
          Give us your aspirations for better generations
        </p>
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
                "Aspiration",
                formData.fullname,
                formData.message,
                "Anonymous",
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

export default AspirationPage;
