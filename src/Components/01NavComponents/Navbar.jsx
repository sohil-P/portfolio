import { useState } from "react";

function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="h-16 w-full fixed top-0 left-0 z-10 sm:flex sm:items-center sm:justify-center">
      <nav className="bg-[#EDF4F2] dark:bg-[#040D12] h-full w-full px-2.5 flex items-center justify-between shadow-sm dark:shadow-[#f3f7f4] sm:px-5 transition-colors">
        {/* Logo */}
        <div className="w-25 h-full flex items-center">
          <img
            src="./Images/dark-logo.webp"
            alt="Logo"
            className="w-full h-auto object-cover cursor-pointer dark:invert"
          />
        </div>

        {/* Menu List */}
        <ul
          className={`lg:flex lg:items-center bg-[#EDF4F2] dark:bg-[#040D12] max-lg:dark:bg-[#31363F] max-lg:absolute max-lg:top-18 max-lg:right-12 max-lg:px-6 max-lg:py-1.5 max-lg:rounded-lg max-lg:shadow-lg ${
            menuOpen ? "max-lg:block" : "max-lg:hidden"
          }`}
        >
          <li className="lg:mx-5 my-3 list-none">
            <a
              href="#home"
              className="no-underline text-[#1b1f23] dark:text-[#f3f7f4] hover:text-[#000] dark:hover:text-white"
            >
              Home
            </a>
          </li>

          <li className="lg:mx-5 my-3">
            <a
              href="#about"
              className="no-underline text-[#1b1f23] dark:text-[#f3f7f4] hover:text-[#000] dark:hover:text-white"
            >
              About me
            </a>
          </li>

          <li className="lg:mx-5 my-3">
            <a
              href="#service"
              className="no-underline text-[#1b1f23] dark:text-[#f3f7f4] hover:text-[#000] dark:hover:text-white"
            >
              Services
            </a>
          </li>

          <li className="lg:mx-5 my-3">
            <a
              href="#portfolio"
              className="no-underline text-[#1b1f23] dark:text-[#f3f7f4] hover:text-[#000] dark:hover:text-white"
            >
              Portfolio
            </a>
          </li>

          <li className="lg:mx-5 my-3">
            <a
              href="#contact"
              className="no-underline text-[#1b1f23] dark:text-[#f3f7f4] hover:text-[#000] dark:hover:text-white"
            >
              Contact me
            </a>
          </li>
        </ul>

        {/* Theme & Menu Toggle */}
        <div className="h-full w-25 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 cursor-pointer border-0 bg-transparent"
          >
            {theme === "dark" ? (
              <i className="fa-solid fa-sun text-xl text-[#E2DFD0]"></i>
            ) : (
              <i className="fa-solid fa-moon text-xl text-[#1E212D]"></i>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`h-10 w-10 border-0 cursor-pointer relative bg-transparent max-lg:block ${
              menuOpen ? "active" : "lg:hidden"
            }`}
            onClick={toggleMenu}
          >
            <span
              className={`h-0.5 absolute w-8 inset-0 m-auto transition duration-200 ease-in-out bg-[#1E212D] dark:bg-[#E2DFD0] rounded-xl transform -translate-y-2 ${
                menuOpen ? "-translate-y-[0] -rotate-45" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 absolute w-8 inset-0 m-auto transition duration-200 ease-in-out bg-[#1E212D] dark:bg-[#E2DFD0] rounded-xl ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 absolute w-8 inset-0 m-auto transition duration-200 ease-in-out bg-[#1E212D] dark:bg-[#E2DFD0] rounded-xl transform translate-y-2 ${
                menuOpen ? "translate-y-[0] rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
