// select quantity
document.getElementById('quantity').addEventListener('change', function() {
	input_units=document.getElementById('input-unit')
	output_units=document.getElementById('output-unit')

	// length units
	const length=`
		<option value="select">Select</option>
		<option value="cm">Centimetres</option>
		<option value="ft">Feet</option>
		<option value="km">Kilometres</option>
		<option value="metres">Metres</option>
	`
	// temperature units
	const temperature=`
		<option value="select">Select</option>
		<option value="celsius">Celsius</option>
		<option value="fahrenheit">Fahrenheit</option>
		<option value="kelvin">Kelvin</option>
	`

	if (this.value==='length') {
		input_units.innerHTML=length
		output_units.innerHTML=length
	}
	else {
		input_units.innerHTML=temperature
		output_units.innerHTML=temperature
	}
})

// convert
document.getElementById('convert').addEventListener('click', () => {
	const input=Number(document.getElementById('input').value)
	const input_unit=document.getElementById('input-unit').value
	const output_unit=document.getElementById('output-unit').value
	let output=0
	
	// length units
	// centimetres-metres
	if(input_unit=="cm" && output_unit=="metres") {
		output=input/100
	}
	else if(input_unit=="metres" && output_unit=="cm") {
		output=input*100
	}
	// feet-metres
	else if(input_unit=="ft" && output_unit=="metres") {
		output=input*0.3048
	}
	else if(input_unit=="metres" && output_unit=="ft") {
		output=input/0.3048
	}
	// kilometres-metres
	else if(input_unit=="km" && output_unit=="metres") {
		output=input*1000
	}
	else if(input_unit=="metres" && output_unit=="km") {
		output=input/1000
	}

	// temperature units
	// Celsius-Fahrenheit
	if(input_unit=="celsius" && output_unit=="fahrenheit") {
		output=(input*9/5)+32
	}
	else if(input_unit=="fahrenheit" && output_unit=="celsius") {
		output=(input-32)*5/9
	}
	// Celsius-Kelvin
	else if(input_unit=="celsius" && output_unit=="kelvin") {
		output=(input*100+27315)/100 // to avoid floating point issues
	}
	else if(input_unit=="kelvin" && output_unit=="celsius") {
		output=(input*100-27315)/100 // to avoid floating point issues
	}

	document.getElementById('output').value=output.toString()
})

// reverse units
document.getElementById('reverse').addEventListener('click', () => {
	const input_unit=document.getElementById('input-unit').value
	const output_unit=document.getElementById('output-unit').value
	document.getElementById('input-unit').value=output_unit
	document.getElementById('output-unit').value=input_unit
})

// clear and reset
document.getElementById('clear').addEventListener('click', () => {
	document.getElementById('quantity').value='select'
	document.getElementById('input').value=''
	document.getElementById('input-unit').value='select'
	document.getElementById('output-unit').value='select'
	document.getElementById('output').value=''
})