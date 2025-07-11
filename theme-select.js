const themeSelect = document.getElementById("theme-select")

function applyTheme(theme) {
	if (theme === "dark" || theme === "light") {
		document.documentElement.setAttribute("data-theme", theme)
	}
	else if (theme === "system") {
		const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
		document.documentElement.setAttribute("data-theme", systemDark ? "dark" : "light")
	}
}

function setTheme(theme) {
	localStorage.setItem("theme-preference", theme)
	applyTheme(theme)
}

function initTheme(theme) {
	const savedTheme = localStorage.getItem("theme-preference") || "system"
	themeSelect.value = savedTheme
	applyTheme(savedTheme)

	if (savedTheme === "system") {
		window.matchMedia("(prefers-coloe-scheme: dark)").addEventListener("change", () => {
			applyTheme("system")
		})
	}
}

themeSelect.addEventListener("change", (e) => {
	setTheme(e.target.value)
})

initTheme()