// function to add two numbers (to prevent concatenation)
function add(a, b) {
	return Number(a)+Number(b);
}

// toggles dark and light modes
document.getElementById('theme-select').addEventListener('change', function() {
	document.body.classList.remove('dark')
	if(this.value==='dark')
		document.body.classList.add('dark')
})

// encrypt
document.getElementById('encrypt').addEventListener('click', function() {
	let input=String(document.getElementById('input').value)
	let shift=Number(document.getElementById('shift').value)
	let output=''
	for(let i=0; i<input.length; i++) {
		let char=input[i]
		if(char>='A' && char<='Z') {
			let n=((char.charCodeAt(0) + shift-65)%26 + 26)%26 + 65
			output+=String.fromCharCode(n)
		}
		else if(char>='a' && char<='z') {
			let n=((char.charCodeAt(0) + shift-97)%26 + 26)%26 + 97
			output+=String.fromCharCode(n)
		}
		else {
			output+=char
		}
	}
	document.getElementById('output').value=output
})

// clear and reset
document.getElementById('clear').addEventListener('click', function() {
	document.getElementById('input').value=''
	document.getElementById('shift-letters').value=''
	document.getElementById('output').value=''

	console.log("Cleared")
})