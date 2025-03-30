from django.shortcuts import render

def index(req):
	context={}
	if req.method=="POST":
		quantity=req.POST.get("quantity", "select")
		input=req.POST.get("input", "")
		output=req.POST.get("output", "")
		input_unit=req.POST.get("input-unit", "select")
		output_unit=req.POST.get("output-unit", "select")
		
		context={
			"quantity": quantity,
			"input": input,
			"output": output,
			"input-unit": input_unit,
			"output-unit": output_unit
		}
	
	return render(req, "converter.html", context)