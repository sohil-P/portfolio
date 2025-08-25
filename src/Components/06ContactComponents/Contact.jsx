function Contact() {
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

        <form className="max-w-2xl mx-auto">
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
    </section>
  );
}

export default Contact;
