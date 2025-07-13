import "./header.css";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    initTheme();
  });

  function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "system";
    document.getElementById("theme-select").value = savedTheme;
    applyTheme(savedTheme);
  }

  function applyTheme(theme) {
    if (theme === "dark" || theme === "light") {
      localStorage.theme = theme;
    } else if (theme === "system") {
      localStorage.removeItem("theme");
    }

    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }

  function setTheme(e) {
    applyTheme(e.target.value);
  }

  function mobileMenu() {
    document.querySelector(".nav-menu").classList.toggle("active");
  }

  return (
    <header>
      <nav>
        <label className="theme-select">
          Select theme:
          <select
            className="border m-2 p-1 rounded-md"
            id="theme-select"
            onChange={setTheme}
          >
            <option value="system">System default</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </label>
        <ul className="nav-menu">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#gaming">Gaming</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#personal">Personal Details</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="hamburger" onClick={mobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}
