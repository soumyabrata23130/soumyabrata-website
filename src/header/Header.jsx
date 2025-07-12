import "./header.css";

function themeSelect() {
  const themeSelect = document.getElementById("theme-select");

  function applyTheme(theme) {
    if (theme === "dark" || theme === "light") {
      document.documentElement.setAttribute("data-theme", theme);
    } else if (theme === "system") {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.setAttribute(
        "data-theme",
        systemDark ? "dark" : "light"
      );
    }
  }

  function setTheme(theme) {
    localStorage.setItem("theme-preference", theme);
    applyTheme(theme);
  }

  function initTheme() {
    const savedTheme = localStorage.getItem("theme-preference") || "system";
    themeSelect.value = savedTheme;
    applyTheme(savedTheme);

    if (savedTheme === "system") {
      window
        .matchMedia("(prefers-coloe-scheme: dark)")
        .addEventListener("change", () => {
          applyTheme("system");
        });
    }
  }

  themeSelect.addEventListener("change", (e) => {
    setTheme(e.target.value);
  });

  initTheme();
}

function mobileMenu() {
  document.querySelector(".nav-menu").classList.toggle("active");
}

export default function Header() {
  return (
    <header>
      <nav>
        <label className="theme-select">
          Select theme:
          <select
            className="border m-2 p-1 rounded-sm"
            id="theme-select"
            onChange={themeSelect}
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
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}
