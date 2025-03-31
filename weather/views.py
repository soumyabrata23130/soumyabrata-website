from django.shortcuts import render
import json
import urllib.request

def index(req):
	context={}
	if req.method=='POST':
		city=req.POST['city']

		source=urllib.request.urlopen('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=643d74ed61652d0b3ac8bfe900c9b122').read()

		data=json.loads(source)

		temp=str(round(data['main']['temp']-273.15, 2))
		temp_max=str(round(data['main']['temp_max']-273.15, 2))
		temp_min=str(round(data['main']['temp_min']-273.15, 2))
		temp_feel=str(round(data['main']['feels_like']-273.15, 2))

		context={
			"city": city,
			"country": str(data['sys']['country']),
			"temp": temp + " ℃ (max: " + temp_max + " ℃; min: " + temp_min + " ℃)",
			"temp_feel": temp_feel + " ℃",
			"humidity": str(data['main']['humidity']) + "%",
			"pressure": str(data['main']['pressure']) + ' mbar',
			"speed": str(data['wind']['speed']) + ' m/s (gust: ' + str(data['wind']['gust']) + ' m/s)',
		}
	return render(req, "weather.html", context)