import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Footer from "./footer/Footer.jsx";
import Header from "./header/Header.jsx";

import Hero from "./hero/Hero.jsx";
import About from "./about/About.jsx";
import Skills from "./skills/Skills.jsx";
import Projects from "./projects/Projects.jsx";
import Events from "./events/Events.jsx";
import Education from "./education/Education.jsx";
import Personal from "./personal/Personal.jsx";
import Contact from "./contact/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Hero />
    <hr />
    <About />
    <hr />
    <Skills />
    <hr />
    <Projects />
    <hr />
    <Events />
    <hr />
    <Education />
    <hr />
    <Personal />
    <hr />
    <Contact />
    <Footer />
  </StrictMode>
);
