document.getElementById("theme-select").addEventListener("change", function() {
	const theme=document.getElementById("theme-select").value
	console.log("Theme: " + theme)

	switch(theme) {
		case "dark": // if theme is dark, select dark theme
			document.querySelector("html").style.cssText = `
				color-scheme: dark;
				--background: #0a0a0a;
				--box: #202020;
				--back: darkgreen;
				--foreground: #ededed;
			`
			break
		case "light": // if theme is light, select light theme
			document.querySelector("html").style.cssText = `
				color-scheme: light;
				--background: #f0f0f2;
				--box: white;
				--back: lightgreen;
				--foreground: black;
			`
			break
		default: // otherwise, select system default
			document.querySelector("html").style.cssText = ""
	}
})
