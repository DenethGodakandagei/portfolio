import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Sun from "./images/dark theme icon/sun.png";
import Moon from "./images/dark theme icon/moon.png";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/about";
import Footer from "./components/Footer";
import Mainscripts from "./scripts/Mainscripts";
import CountEdu from "./components/Count&edu";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const [currentImage, setCurrentImage] = useState(Sun, Moon);
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const handleClick = () => {
    setCurrentImage((curr) => (curr === Sun ? Moon : Sun));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Mainscripts />
        <img
          className="darktheme"
          src={currentImage}
          alt="Current Image"
          onClick={() => {
            handleClick();
            toggleTheme();
          }}
          checked={theme === "dark"}
          id="icon"
        />
        <NavBar />
        <Home />
        <About />
        <CountEdu />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
