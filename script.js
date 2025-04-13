// toggles dark and light modes
document.getElementById("theme-select").addEventListener("change", () => {
	document.body.classList.remove("dark")
	if(this.value==="dark")
		document.body.classList.add("dark")
})