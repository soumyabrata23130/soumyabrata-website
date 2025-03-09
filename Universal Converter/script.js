// toggles dark and light modes
document.getElementById('theme-select').addEventListener('change', function() {
	document.body.classList.remove('dark')
	if(this.value==='dark')
		document.body.classList.add('dark')
})

// select quantity
document.getElementById('quantity').addEventListener('change', function() {
	input_units=document.getElementById('input-unit')
	output_units=document.getElementById('output-unit')

	// length units
	const length=`
		<option value="select">Select</option>
		<option value="cm">Centimetres (cm)</option>
		<option value="ft">Feet (ft)</option>
		<option value="ftin">Feet-inches (ft-in)</option>
		<option value="km">Kilometres (km)</option>
		<option value="m">Metres (m)</option>
		<option value="mm">Millimetres (mm)</option>
	`
	// temperature units
	const temperature=`
		<option value="select">Select</option>
		<option value="celsius">Celsius (C)</option>
		<option value="fahrenheit">Fahrenheit (F)</option>
		<option value="kelvin">Kelvin (K)</option>
	`

	if (this.value=='length') {
		input_units.innerHTML=length
		output_units.innerHTML=length
	}
	else {
		input_units.innerHTML=temperature
		output_units.innerHTML=temperature
	}
})

// input textbox for feet-inches
document.getElementById('input-unit').addEventListener('change', function() {
	const input_unit=document.getElementById('input-unit').value
	if(input_unit=="ftin") {
		document.getElementById('input-label').innerHTML=`
			<p>Input:</p>
		`
		document.getElementById('input-box').innerHTML=`
			<input type="text" id="input1">
			<label for="input">ft</label>
			<input type="text" id="input2">
			<label for="input2">in</label>
		`
	}
})

// convert
document.getElementById('convert').addEventListener('click', function() {
	const input=Number(document.getElementById('input').value)
	const input1=Number(document.getElementById('input1').value)
	const input2=Number(document.getElementById('input2').value)
	const input_unit=document.getElementById('input-unit').value
	const output_unit=document.getElementById('output-unit').value
	let output=0, output1=0, output2=0

	// output textbox for feet-inches
	if(output_unit=="ftin") {
		document.getElementById('output-label').innerHTML=`
			<p>Input:</p>
		`
		document.getElementById('output-box').innerHTML=`
			<input type="text" id="output1">
			<label for="output">ft</label>
			<input type="text" id="output2">
			<label for="output2">in</label>
		`
	}

	if(input_unit==output_unit) {
		output=input;
		output1=input1;
		output2=input2;
	}
	
	// length units
	// centimetres to metres
	if(input_unit=="cm" && output_unit=="m") {
		output=input/100
	}
	// centimetres to millimetres
	else if(input_unit=="cm" && output_unit=="mm") {
		output=input*10
	}

	// feet to metres
	else if(input_unit=="ft" && output_unit=="m") {
		output=input*0.3048
	}

	// feet-inches to metres
	else if(input_unit=="ftin" && output_unit=="m") {
		output1=input1*0.3048
		output2=input2*0.0254
		output=output1+output2
	}

	// kilometres to metres
	else if(input_unit=="km" && output_unit=="m") {
		output=input*1000
	}

	// metres to centimetres
	else if(input_unit=="m" && output_unit=="cm") {
		output=input*100
	}
	// metres to feet
	else if(input_unit=="m" && output_unit=="ft") {
		output=input/0.3048
	}
	// metres to kilometres
	else if(input_unit=="m" && output_unit=="km") {
		output=input/1000
	}
	// metres to millimetres
	else if(input_unit=="m" && output_unit=="mm") {
		output=input*1000
	}

	// millimetres to centimetres
	else if(input_unit=="mm" && output_unit=="cm") {
		output=input/10
	}
	// millimetres to metres
	else if(input_unit=="mm" && output_unit=="m") {
		output=input/1000
	}

	
	// temperature units
	// Celsius to Fahrenheit
	if(input_unit=="celsius" && output_unit=="fahrenheit") {
		output=(input*9/5)+32
	}
	// Celsius to Kelvin
	else if(input_unit=="celsius" && output_unit=="kelvin") {
		output=(input*100+27315)/100 // to avoid floating point issues
	}

	// Fahrenheit to Celsius
	else if(input_unit=="fahrenheit" && output_unit=="celsius") {
		output=(input-32)*5/9
	}
	// Fahrenheit to Kelvin
	else if(input_unit=="fahrenheit" && output_unit=="kelvin") {
		output=((input-32)*500/9+27315)/100
	}
	
	// Kelvin to Celsius
	else if(input_unit=="kelvin" && output_unit=="celsius") {
		output=(input*100-27315)/100 // to avoid floating point issues
	}
	// Kelvin to Fahrenheit
	else if(input_unit=="kelvin" && output_unit=="fahrenheit") {
		output=((input*100-27315)*9/500)+32
	}

	document.getElementById('output').value=output.toString()
	document.getElementById('output1').value=output1.toString()
	document.getElementById('output2').value=output2.toString()
})

// reverse units
document.getElementById('reverse').addEventListener('click', function() {
	const input_unit=document.getElementById('input-unit').value
	const output_unit=document.getElementById('output-unit').value
	document.getElementById('input-unit').value=output_unit
	document.getElementById('output-unit').value=input_unit
})

// clear and reset
document.getElementById('clear').addEventListener('click', function() {
	document.getElementById('quantity').value='select'
	document.getElementById('input').value=''
	document.getElementById('input-unit').value='select'
	document.getElementById('output-unit').value='select'
	document.getElementById('output').value=''
})