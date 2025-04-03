document.getElementById("get").addEventListener("click", ()=>{
	city=document.getElementById("input").value
	source="http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=643d74ed61652d0b3ac8bfe900c9b122"

	fetch(source)
		.then(response => response.json())
		.then(data => {
			// temperature
			temp=(Math.round(data.main.temp*100)-27315)/100 // current
			temp_feel=(Math.round(data.main.feels_like*100)-27315)/100 // feels like
			temp_max=(Math.round(data.main.temp_max*100)-27315)/100 // maximum
			temp_min=(Math.round(data.main.temp_min*100)-27315)/100 // minimum
			// pressure
			pressure=data.main.pressure // current
			pressure_gnd=data.main.grnd_level // ground level
			pressure_sea=data.main.sea_level // sea level
			// other
			country=data.sys.country // country
			humidity=data.main.humidity // humidity
			speed=data.wind.speed // wind speed

			document.getElementById("output").innerHTML=`
				<h3>Weather data of ${city}, ${country}</h3>
				<ul>
					<li>Temperature: ${temp} ℃ (max: ${temp_max} ℃; min: ${temp_min} ℃)</li>
					<li>Feels like: ${temp_feel} ℃</li>
					<li>Humidity: ${humidity}%</li>
					<li>Pressure: ${pressure} <abbr title="hectopascals">hPa</abbr> (ground: ${pressure_gnd} <abbr title="hectopascals">hPa</abbr>; sea: ${pressure_sea} <abbr title="hectopascals">hPa</abbr>)</li>
					<li>Wind speed: ${speed} m/s</li>
				</ul>
			`
		})
		.catch(error => console.error('Error fetching JSON:', error))
})