from django.shortcuts import render

def caesar(input, shift):
	output=""
	for i in input:
		if i.isupper():
			output+=chr((ord(i) + shift - 65)%26 + 65)
		elif i.islower():
			output+=chr((ord(i) + shift - 97)%26 + 97)
		else:
			output+=i
	return output

def index(req):
	context={}
	if req.method=="POST":
		input=req.POST.get("input", "")
		shift=req.POST.get("shift", 0)

		output=None
		
		if input and shift.isdigit():
			shift=int(shift)
			output=caesar(input,shift)
		
		context={
			"input": input,
			"shift": shift,
			"output": output
		}
	
	return render(req, "caesar.html", context)