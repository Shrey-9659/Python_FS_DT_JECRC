from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def contact(request):
    return HttpResponse("qwertyui")

def signup(request):
    return render(request, 'signup.html')

def submit(request):
    name = request.GET.get("fullname")
    email = request.GET.get("email")

    data = {
        "fullname" : name,
        "email" : email
    }

    return render(request, "submit.html", data)

    # return HttpResponse("Form has been submitted")