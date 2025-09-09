function Portfolio() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-8 dark:bg-[#040D12] transition-colors duration-300"
    >
      <div className="w-full px-[5%] sm:px-[10%] py-10">
        <h4 className="text-center mb-2 text-lg text-[#1b1f23] dark:text-[#f3f7f4]">
          My Portfolio
        </h4>
        <h2 className="text-center text-5xl text-[#1b1f23] dark:text-[#f3f7f4]">
          My Latest Work
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-[#4B5563] dark:text-gray-400">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5">
          <div className="aspect-square bg-[url('/Images/work-1.webp')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
            <div className="bg-[#E5E5E5] dark:bg-[#31363F] w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-300 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold text-[#1b1f23] dark:text-[#f3f7f4]">
                  Frontend Project
                </h2>
                <p className="text-sm text-[#1b1f23] dark:text-[#f3f7f4]">
                  Web Design
                </p>
              </div>
              <div className="border rounded-full border-[#1E212D] w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] bg-[#1E212D] dark:bg-[#E2DFD0]">
                <i className="fa-solid fa-paper-plane text-xl text-[#fafdff] dark:text-[#1b1f23]"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
