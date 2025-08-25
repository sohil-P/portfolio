function About() {
  return (
    <section
      id="about"
      className="scroll-mt-8 dark:bg-[#040D12] transition-colors duration-300"
    >
      <div className="w-full px-[5%] sm:px-[10%] py-10">
        <h4 className="text-center mb-2 text-lg text-[#1b1f23] dark:text-[#f3f7f4]">
          Introduction
        </h4>
        <h2 className="text-center text-5xl text-[#1b1f23] dark:text-[#f3f7f4]">
          About me
        </h2>

        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
          <div className="max-w-max mx-auto relative">
            <img
              src="./Images/my-image2.webp"
              alt="My Image"
              className="w-64 sm:w-80 rounded-3xl max-w-none"
            />
          </div>
          <div className="flex-1">
            <p className="mb-10 max-w-2xl text-justify text-[#4B5563] leading-7 dark:text-gray-400">
              Hi! I’m Sohil, a Frontend Web Developer who enjoys building
              beautiful, interactive, and responsive websites. For me, coding is
              more than just writing code — it’s about creating experiences that
              connect with people. I believe in continuous learning and I’m
              always curious about new tools, trends, and ways to improve my
              work.
            </p>

            <ul className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 gap-6 max-w-2xl">
              <li className="text-[#4B5563] border-[0.5px] border-[#4B5563] dark:border-[#fff] rounded-xl p-6 cursor-pointer dark:bg-[#31363F] bg-[#E5E5E5] hover:bg-transparent hover:-translate-y-1 duration-300 hover:shadow-[4px_4px_0_#000] dark:shadow-[#f3f7f4]">
                <i class="fa-solid fa-code text-2xl mt-3 text-[#1E212D] dark:text-[#E2DFD0]"></i>
                <h3 className="my-4 font-semibold text-[#1b1f23] dark:text-[#f3f7f4]">
                  Languages
                </h3>
                <p className="text-[#3D3D3D] dark:text-gray-400">
                  HTML5, CSS3, JavaScript, React JS, Python (basic)
                </p>
              </li>

              <li className="text-[#4B5563] border-[0.5px] border-[#4B5563] dark:border-[#fff] rounded-xl p-6 cursor-pointer dark:bg-[#31363F] bg-[#E5E5E5] hover:bg-transparent hover:-translate-y-1 duration-300 hover:shadow-[4px_4px_0_#000] dark:shadow-[#f3f7f4]">
                <i class="fa-solid fa-graduation-cap text-2xl mt-3 text-[#1E212D] dark:text-[#E2DFD0]"></i>
                <h3 className="my-4 font-semibold text-[#1b1f23] dark:text-[#f3f7f4]">
                  Education
                </h3>
                <p className="text-[#3D3D3D] dark:text-gray-400">
                  BCA - Sankalchand Patel University, Visnagar
                </p>
              </li>

              <li className="text-[#4B5563] border-[0.5px] border-[#4B5563] dark:border-[#fff] rounded-xl p-6 cursor-pointer dark:bg-[#31363F] bg-[#E5E5E5] hover:bg-transparent hover:-translate-y-1 duration-300 hover:shadow-[4px_4px_0_#000] dark:shadow-[#f3f7f4]">
                <i class="fa-solid fa-diagram-project text-2xl mt-3 text-[#1E212D] dark:text-[#E2DFD0]"></i>
                <h3 className="my-4 font-semibold text-[#1b1f23] dark:text-[#f3f7f4]">
                  Projects
                </h3>
                <p className="text-[#3D3D3D] dark:text-gray-400">
                  Build more than 5 projects
                </p>
              </li>
            </ul>

            <h4 className="my-6 text-[#1b1f23] dark:text-[#f3f7f4]">
              Tools I Use
            </h4>

            <ul className="flex items-center gap-3 sm:gap-5">
              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-[#4B5563] rounded-lg cursor-pointer hover:-translate-y-1 duration-300">
                <img
                  src="./Images/vscode.webp"
                  alt="VS code"
                  className="w-5 sm:w-7"
                />
              </li>
              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-[#4B5563] rounded-lg cursor-pointer hover:-translate-y-1 duration-300">
                <img
                  src="./Images/figma.webp"
                  alt="VS code"
                  className="w-5 sm:w-7"
                />
              </li>
              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-[#4B5563] rounded-lg cursor-pointer hover:-translate-y-1 duration-300">
                <img
                  src="./Images/git.webp"
                  alt="VS code"
                  className="w-5 sm:w-7"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
