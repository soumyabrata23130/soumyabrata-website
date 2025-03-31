document.getElementById("get").addEventListener("click", ()=>{
	city=document.getElementById("city").value
	if(city=="New Delhi") {
		document.getElementById("city").value=city[-5]
	}
	else {
		document.getElementById("city").value=city
	}
})