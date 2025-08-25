function Service() {
  return (
    <section
      id="service"
      className="scroll-mt-8 dark:bg-[#040D12] transition-colors duration-300"
    >
      <div className="w-full px-[5%] sm:px-[10%] py-10">
        <h4 className="text-center mb-2 text-lg text-[#1b1f23] dark:text-[#f3f7f4]">
          What I Offer
        </h4>
        <h2 className="text-center text-5xl text-[#1b1f23] dark:text-[#f3f7f4]">
          My Services
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-[#4B5563] dark:text-gray-400">
          Building responsive and user-friendly websites tailored to your needs.
          Ensuring your website looks perfect on any device and screen size.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
          <div className="border border-[#4B5563] dark:border-[#fff] rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer dark:bg-[#31363F] bg-[#E5E5E5] hover:bg-transparent hover:-translate-y-1 duration-300 dark:shadow-[#f3f7f4]">
            <i class="fa-solid fa-globe text-4xl text-[#1E212D] dark:text-[#E2DFD0]"></i>
            <h3 className="text-lg my-4 text-[#1b1f23] dark:text-[#f3f7f4]">
              Web design
            </h3>
            <p className="text-sm text-[#1b1f23] leading-5 dark:text-[#f3f7f4]">
              Creating visually engaging and user-friendly websites.
            </p>
            <a
              href=""
              className="text-[#1b1f23] flex items-center gap-2 text-sm mt-5 dark:text-[#f3f7f4]"
            >
              Read more
              <i class="fa-solid fa-arrow-right-long text-[#1b1f23] dark:text-[#f3f7f4]"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
