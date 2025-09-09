import { useState } from "react";

function Contact() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    // Step 1: Overlay show karo (loading)
    setShowOverlay(true);
    setShowAlert(false);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx5b69U3IRBBFxGDP1UJhS4RdvDYmJ7ge2fx-QEPxwUq7IYA1aMULMxFuLHNgZoWVzDsQ/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result.result === "Success") {
        setAlertMessage("Message sent successfully!");
        setShowAlert(true);
        form.reset(); // form clear ho jaayega
      } else {
        setAlertMessage("Failed to send message. Try again!");
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setAlertMessage("Something went wrong!");
      setShowAlert(true);
    }
  };

  // https://script.google.com/macros/s/AKfycbx5b69U3IRBBFxGDP1UJhS4RdvDYmJ7ge2fx-QEPxwUq7IYA1aMULMxFuLHNgZoWVzDsQ/exec

  return (
    <section
      id="contact"
      className="scroll-mt-8 dark:bg-[#040D12] transition-colors duration-300"
    >
      <div className="w-full px-[5%] sm:px-[10%] py-10">
        <h4 className="text-center mb-2 text-lg text-[#1b1f23] dark:text-[#f3f7f4]">
          Connect with me
        </h4>
        <h2 className="text-center text-5xl text-[#1b1f23] dark:text-[#f3f7f4]">
          Get In Touch
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-[#4B5563] dark:text-gray-400">
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>

        <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
            <input
              type="text"
              placeholder="Enter your name"
              className="flex-1 p-3 outline-none border-[0.5px] border-[#4b5563] dark:border-[#fff] rounded-md bg-[#edf4f2] dark:bg-[#31363F] dark:text-[#fff]"
              name="name"
              required
            />

            <input
              type="text"
              placeholder="Enter your email"
              className="flex-1 p-3 outline-none border-[0.5px] border-[#4b5563] dark:border-[#fff] rounded-md bg-[#edf4f2] dark:bg-[#31363F] dark:text-[#fff]"
              name="email"
              required
            />
          </div>

          <textarea
            rows={6}
            placeholder="Enter your message"
            className="w-full p-4 outline-none border-[0.5px] border-[#4b5563] dark:border-[#fff] rounded-md bg-[#edf4f2] dark:bg-[#31363F] dark:text-[#fff] mb-6"
            name="message"
            required
          ></textarea>

          <button
            type="submit"
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-[#1E212D] dark:bg-[#E2DFD0] dark:text-[#1b1f23] font-medium text-[#fafdff] cursor-pointer rounded-full mx-auto hover:scale-105 duration-300 active:scale-95"
          >
            Submit now <i class="fa-solid fa-arrow-right-long w-4 mt-0.5"></i>
          </button>
        </form>
      </div>

      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {!showAlert ? (
            <div className="text-white text-xl animate-pulse">Sending...</div>
          ) : (
            <div className="bg-white dark:bg-[#1E1E1E] text-center p-6 rounded-xl shadow-xl max-w-sm mx-auto">
              <p className="mb-4 text-lg dark:text-white">{alertMessage}</p>
              <button
                onClick={() => setShowOverlay(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 active:scale-95 duration-200"
              >
                OK
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Contact;
