function Home() {
  return (
    <section
      id="home"
      className="dark:bg-[#040D12] transition-colors duration-300"
    >
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <img
          src="./Images/Profile-photo.webp"
          alt="Profile Img"
          className="rounded-full w-32"
        />
        <h3 className="flex items-center gap-2 text-xl md:text-2xl mb-3 text-[#1b1f23] dark:text-[#f3f7f4]">
          Hello! I'm Sohil Prajapati
          <img src="./Images/hand-icon.webp" alt="Hand Icon" className="w-6" />
        </h3>

        <h1 className="text-3xl sm:text-6xl lg:text-[66px] text-[#1b1f23] dark:text-[#f3f7f4]">
          Frontend web developer based in Gujarat.
        </h1>
        <p className="max-w-2xl mx-auto text-[#4B5563] leading-7 dark:text-gray-400">
          I am a Frontend developer from Gujarat, India. Mixing creativity and
          code to build memorable digital experiences. Let’s create something
          amazing together!
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="#contact"
            className="px-10 py-3 rounded-full font-medium bg-[#1E212D] dark:bg-[#E2DFD0] dark:text-[#1b1f23] text-[#fafdff] flex items-center gap-2 transition-transform ease-in-out duration-150 hover:scale-105 hover:shadow-lg"
          >
            Contact me <i class="fa-solid fa-arrow-right-long w-4 mt-0.5"></i>
          </a>
          <a
            href="./Images/(F)sohil-resume.pdf"
            download
            className="px-10 py-3 border rounded-full border-gray-500 bg-transparent text-[#1b1f23] flex items-center gap-2 transition-transform duration-150 active:scale-90 dark:text-[#f3f7f4]"
          >
            My Resume{" "}
            <i class="fa-solid fa-download w-4 text-[#1E212D] dark:text-[#E2DFD0]"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
