jafrom django.http import HttpResponse
from django.shortcuts import render

def home(request):
    # return HttpResponse("This is home page")
    return render(request, 'home.html')

def about(request):
    # return HttpResponse("<h1>This is my about page</h1>")
    return render(request, "about.html")

def contact(request):
    data = {
        "email" : "shreyyyyyy@gmail.com",
        "contact" : "+91 9660023360"
    }
    # return HttpResponse("This is contact us page")
    return render(request, "contact.html", data)
