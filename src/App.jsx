import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/01NavComponents/Navbar.jsx";
import Home from "./Components/02HomeComponents/Home.jsx";
import About from "./Components/03AboutComponents/About.jsx";
import Service from "./Components/04ServiceComponents/Service.jsx";
import Portfolio from "./Components/05PortfolioComponents/Portfolio.jsx";
import Contact from "./Components/06ContactComponents/Contact.jsx";
import Footer from "./Components/07FooterComponents/Footer.jsx";

function getInitialTheme() {
  if (typeof localStorage !== "undefined" && localStorage.theme) {
    return localStorage.theme;
  }
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Home />
      <About />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
