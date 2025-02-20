document.getElementById('convert').addEventListener('click', () => {
	input=document.getElementById('input').value
	input_unit=document.getElementById('input-unit').value
	output_unit=document.getElementById('output-unit').value
	output=0

	if(input_unit==output_unit)
		alert("Input and output units must be different.")
	else {
		if(input_unit=="celsius" && output_unit=="fahrenheit")
			output=(input*9/5)+32
		else if(input_unit=="fahrenheit" && output_unit=="celsius")
			output=(input-32)*5/9
		document.getElementById('output').value=output.toString()
	}
})