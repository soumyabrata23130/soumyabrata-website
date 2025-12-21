import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Footer from "./footer/Footer.jsx";
import Header from "./header/Header.jsx";

import Hero from "./Hero.jsx";
// import About from "./archive/About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Events from "./Events.jsx";
//import Gaming from "./archive/Gaming.jsx";
import Education from "./Education.jsx";
import Personal from "./Personal.jsx";
import Contact from "./Contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Hero />
    <hr />
    {/*<About />
    <hr />*/}
    <Skills />
    <hr />
    <Projects />
    <hr />
    <Education />
    <hr />
    <Events />
    <hr />
    {/*<Gaming />
    <hr />*/}
    <Personal />
    <hr />
    <Contact />
    <Footer />
  </StrictMode>
);
