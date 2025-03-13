// convert function
function unitConvert(input, input_unit, output_unit) {
	let output
	// input-output key
	let key=`${input_unit}-${output_unit}`

	// length units
	const lengths={
		'cm-in': 1/2.54,
		'cm-km': 0.00001,
		'cm-m': 0.01,
		'cm-mm': 10,
		'ft-m': 0.3048,
		'in-cm': 2.54,
		'in-km': 0.0000254,
		'in-m': 0.0254,
		'in-mm': 25.4,
		'km-cm': 100000,
		'km-in': 1/0.0000254,
		'km-m': 1000,
		'km-mm': 1000000,
		'm-cm': 100,
		'm-ft': 1/0.3048,
		'm-in': 1/0.0254,
		'm-km': 0.001,
		'm-mm': 1000,
		'mm-cm': 0.1,
		'mm-in': 1/25.4,
		'mm-km': 0.001,
		'mm-m': 0.001,
	}

	// if input and output units are equal
	if(input_unit==output_unit) {
		output=input
	}
	// default case
	else {
		output=input*lengths[key]
	}

	return output
}

// input and output textboxes for feet-inches
function feetInches() {
	const input_unit=document.getElementById('input-unit').value
	const output_unit=document.getElementById('output-unit').value

	// for input textbox
	if(input_unit=='ftin') {
		document.getElementById('input-label').innerHTML=`
			<p>Input:</p>
		`
		document.getElementById('input-box').innerHTML=`
			<input type='text' id='input'>
			<label for='input'>ft</label>
			<br/>
			<input type='text' id='input2'>
			<label for='input2'>in</label>
		`
	}
	else {
		document.getElementById('input-label').innerHTML=`
			<label for='input'>Input:</label>
		`
		document.getElementById('input-box').innerHTML=`
			<input type='text' id='input'>
		`
	}

	// for output textbox
	if(output_unit=='ftin') {
		document.getElementById('output-label').innerHTML=`
			<p>Output:</p>
		`
		document.getElementById('output-box').innerHTML=`
			<input type='text' id='output'>
			<label for='output'>ft</label>
			<br/>
			<input type='text' id='output2'>
			<label for='output2'>in</label>
		`
	}
	else {
		document.getElementById('output-label').innerHTML=`
			<label for='output'>Output:</label>
		`
		document.getElementById('output-box').innerHTML=`
			<input type='text' id='output'>
		`
	}
}

// toggles dark and light modes
document.getElementById('theme-select').addEventListener('change', function() {
	document.body.classList.remove('dark')
	if(this.value==='dark')
		document.body.classList.add('dark')
})

// select quantity
document.getElementById('quantity').addEventListener('change', function() {
	input_units=document.getElementById('input-unit'), output_units=document.getElementById('output-unit')

	console.log("Quantity: " + this.value)

	// length units
	const length=`
		<option value='select'>Select</option>
		<option value='cm'>Centimetres (cm)</option>
		<option value='ft'>Feet (ft)</option>
		<option value='ftin'>Feet-inches (ft-in)</option>
		<option value='km'>Kilometres (km)</option>
		<option value='m'>Metres (m)</option>
		<option value='mm'>Millimetres (mm)</option>
	`
	// temperature units
	const temperature=`
		<option value='select'>Select</option>
		<option value='celsius'>Celsius (C)</option>
		<option value='fahrenheit'>Fahrenheit (F)</option>
		<option value='kelvin'>Kelvin (K)</option>
	`

	if(this.value=='length') {
		input_units.innerHTML=length
		output_units.innerHTML=length
	}
	else if(this.value=='temperature') {
		input_units.innerHTML=temperature
		output_units.innerHTML=temperature
	}
	else {
		input_units.innerHTML=`<option value='select'>Select</option>`
		output_units.innerHTML=`<option value='select'>Select</option>`
	}
})


document.getElementById('input-unit').addEventListener('change', function() {
	feetInches()
	console.log("Input unit: " + this.value)
})

document.getElementById('output-unit').addEventListener('change', function() {
	feetInches()
	console.log("Output unit: " + this.value)
})

// convert button
document.getElementById('convert').addEventListener('click', function() {
	let input=Number(document.getElementById('input').value), input2
	const input_unit=document.getElementById('input-unit').value, output_unit=document.getElementById('output-unit').value
	let output=0, output2=0 // outputs

	// if not input is given
	if(input==null) {
		input=0
	}

	if(input_unit=='ftin') {
		input2=Number(document.getElementById('input2').value)
		if(input2==null) {
			input2=0
		}
	}

	// from feet-inches
	if(input_unit=='ftin') {
		output=unitConvert(input, 'ft', output_unit)+unitConvert(input, 'in', output_unit)
	}
	// to feet-inches
	else if(output_unit=='ftin') {
		output=Math.round(unitConvert(input, input_unit, 'ft'))
		output2=Math.round(unitConvert(input, input_unit, 'in')%12)
	}
	//normal case
	else {
		output=unitConvert(input, input_unit, output_unit)
	}
	
	// temperature units
	// Celsius to Fahrenheit
	if(input_unit=='celsius' && output_unit=='fahrenheit') {
		output=(input*9/5)+32
	}
	// Celsius to Kelvin
	else if(input_unit=='celsius' && output_unit=='kelvin') {
		output=(input*100+27315)/100 // to avoid floating point issues
	}

	// Fahrenheit to Celsius
	else if(input_unit=='fahrenheit' && output_unit=='celsius') {
		output=(input-32)*5/9
	}
	// Fahrenheit to Kelvin
	else if(input_unit=='fahrenheit' && output_unit=='kelvin') {
		output=((input-32)*500/9+27315)/100
	}
	
	// Kelvin to Celsius
	else if(input_unit=='kelvin' && output_unit=='celsius') {
		output=(input*100-27315)/100 // to avoid floating point issues
	}
	// Kelvin to Fahrenheit
	else if(input_unit=='kelvin' && output_unit=='fahrenheit') {
		output=((input*100-27315)*9/500)+32
	}

	document.getElementById('output').value=output.toString()
	if(output_unit=='ftin') {
		document.getElementById('output2').value=output2.toString()
	}

	if(input_unit=='ftin') {
		console.log("Input: " + input + " ft " + input2 + " in ")
	}
	else {
		console.log("Input: " + input + " " + input_unit)
	}
	
	if(output_unit=='ftin') {
		console.log("Output: " + output + " ft " + output2 + " in ")
	}
	else {
		console.log("Output: " + output + " " + output_unit)
	}
})

// reverse units
document.getElementById('reverse').addEventListener('click', function() {
	const input_unit=document.getElementById('input-unit').value
	const output_unit=document.getElementById('output-unit').value

	document.getElementById('input-unit').value=output_unit
	document.getElementById('output-unit').value=input_unit

	if(document.getElementById('input-unit').value=='ftin' || document.getElementById('output-unit').value=='ftin') {
		feetInches()
	}
	console.log("Units are reversed")
})

// clear and reset
document.getElementById('clear').addEventListener('click', function() {
	document.getElementById('quantity').value='select'
	document.getElementById('input').value=''
	document.getElementById('input-unit').value='select'
	document.getElementById('output-unit').value='select'
	document.getElementById('output').value=''

	console.log("Cleared")
})