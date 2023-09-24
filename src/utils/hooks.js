import axios from "axios";
import { toast } from "react-toastify";

export const showFlashMessage = (flashMessages) => {
  let currentIndex = 0;
  const interval = setInterval(() => {
    document.title = flashMessages[currentIndex];
    currentIndex = (currentIndex + 1) % flashMessages.length;
  }, 2000); // Change messages every 2 seconds (adjust as needed)

  return () => {
    clearInterval(interval); // Clear the interval when the component unmounts
    document.title = flashMessages[0]; // Set your app's original title here
  };
};

export const handleSendMessage = async (
  subject,
  senderName,
  senderMessage,
  senderEmail,
  setIsLoading,
  setFormData
) => {
  if (senderName === "")
    return toast.error("Please type the fullname", {
      position: toast.POSITION.TOP_CENTER,
    });
  if (senderEmail === "")
    return toast.error("Please type the email", {
      position: toast.POSITION.TOP_CENTER,
    });
  if (subject === "")
    return toast.error("Please type the subject", {
      position: toast.POSITION.TOP_CENTER,
    });
  if (senderMessage === "")
    return toast.error("Please type the message", {
      position: toast.POSITION.TOP_CENTER,
    });

  setIsLoading(true);
  axios
    .post("https://api.emailjs.com/api/v1.0/email/send", {
      service_id: process.env.REACT_APP_SERVICE_ID,
      template_id: process.env.REACT_APP_TEMPLATE_ID,
      user_id: process.env.REACT_APP_USER_ID,
      template_params: {
        to_name: senderEmail,
        from_name: senderName,
        message: senderMessage,
        from_email: senderEmail,
        subject: subject,
      },
    })
    .then((response) => {
      setFormData({ fullname: "", subject: "", email: "", message: "" });
      toast.success("Message has been send", {
        position: toast.POSITION.TOP_RIGHT,
      });
    })
    .catch((error) => {
      setFormData({ fullname: "", subject: "", email: "", message: "" });
      toast.error("Failed send message", {
        position: toast.POSITION.TOP_RIGHT,
      });
    })
    .finally(() => setIsLoading(false));
};
