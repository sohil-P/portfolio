function Footer() {
  return (
    <section
      id="footer"
      className="dark:bg-[#040D12] transition-colors duration-300"
    >
      <div className="pt-20">
        <div className="text-center">
          <img
            src="./Images/dark-logo.webp"
            alt="Logo"
            className="w-50 mx-auto mb-2 cursor-pointer dark:invert"
          />

          <div className="w-max flex items-center gap-2 mx-auto">
            <i class="fa-solid fa-envelope text-2xl text-[#1E212D] dark:text-[#E2DFD0]"></i>
            <p className="dark:text-[#f3f7f4]">sohilprajapati005@gmail.com</p>
          </div>
        </div>

        <div className="text-center sm:flex items-center justify-between border-t border-[#4b5563] dark:border-[#fff] mx-[10%] mt-6 py-12 ">
          <p className="dark:text-[#f3f7f4]">
            © 2025 Sohil Prajapati. All rights reserved.
          </p>
          <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li>
              <a href="https://instagram.com/sohil_.17">
                <i class="fa-brands fa-instagram text-[#1E212D] text-2xl hover:-translate-y-2 duration-300 dark:text-[#E2DFD0]"></i>
              </a>
            </li>

            <li>
              <a href="https://github.com/sohil-P">
                <i class="fa-brands fa-github text-[#1E212D] text-2xl hover:-translate-y-2 duration-300 dark:text-[#E2DFD0]"></i>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/sohil-prajapati-94b515308">
                <i class="fa-brands fa-square-linkedin text-[#1E212D] text-2xl hover:-translate-y-2 duration-300 dark:text-[#E2DFD0]"></i>
              </a>
            </li>

            <li>
              <a href="https://x.com/Sohil__07">
                <i class="fa-brands fa-x-twitter text-[#1E212D] text-2xl hover:-translate-y-2 duration-300 dark:text-[#E2DFD0]"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
