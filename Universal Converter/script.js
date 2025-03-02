// convert
document.getElementById('convert').addEventListener('click', () => {
	input=document.getElementById('input').value
	input_unit=document.getElementById('input-unit').value
	output_unit=document.getElementById('output-unit').value
	output=0
	
	// Celsius-Fahrenheit
	if(input_unit=="celsius" && output_unit=="fahrenheit") {
		output=(input*9/5)+32
		document.getElementById('output').value=output.toString()
	}
	else if(input_unit=="fahrenheit" && output_unit=="celsius") {
		output=(input-32)*5/9
		document.getElementById('output').value=output.toString()
	}
	// Celsius-Kelvin
	else if(input_unit=="celsius" && output_unit=="kelvin") {
		output=Number(input)+273.15
		document.getElementById('output').value=output.toString()
	}
	else if(input_unit=="kelvin" && output_unit=="celsius") {
		output=Number(input)-273.15
		document.getElementById('output').value=output.toString()
	}
	// centimetres-metres
	else if(input_unit=="cm" && output_unit=="metres") {
		output=input/100
		document.getElementById('output').value=output.toString()
	}
	else if(input_unit=="metre" && output_unit=="cm") {
		output=input*100
		document.getElementById('output').value=output.toString()
	}
	// feet-metres
	else if(input_unit=="ft" && output_unit=="metres") {
		output=input*0.3048
		document.getElementById('output').value=output.toString()
	}
	else if(input_unit=="metres" && output_unit=="ft") {
		output=input/0.3048
		document.getElementById('output').value=output.toString()
	}
	// kilometres-metres
	else if(input_unit=="km" && output_unit=="metres") {
		output=input*1000
		document.getElementById('output').value=output.toString()
	}
	else if(input_unit=="metre" && output_unit=="km") {
		output=input/1000
		document.getElementById('output').value=output.toString()
	}
	else {
		alert("Invalid input and output units.")
	}
})

// clear
document.getElementById('clear').addEventListener('click', () => {
	document.getElementById('input').value=''
	document.getElementById('input-unit').value='select'
	document.getElementById('output').value=''
	document.getElementById('output-unit').value='select'
})