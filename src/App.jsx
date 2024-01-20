import { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Parallax from "./components/Parallax/Parallax";
import About from "./components/About/About";

import MyProjects from "./components/Portfolio/MyProjects";
import Contact from "./components/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="section1" id="Home">
        <Navbar />
        <Home />
      </section>
      <section className="" id="About">
        <Parallax type="about" />
      </section>
      <section id="About Me">
        <About />
      </section>
      <section id="Portfolio">
        <Parallax type="Portfolio" />
      </section>
      <MyProjects />
      <section id="Contact Me">
        <Contact />
      </section>
    </>
  );
}

export default App;
