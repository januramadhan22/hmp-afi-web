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
