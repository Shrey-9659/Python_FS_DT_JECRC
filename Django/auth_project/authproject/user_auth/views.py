from django.shortcuts import render
from django.http import HttpResponse
from .models import Usermodel

# Create your views here.

def register(request):
    return render(request, "register.html")

def submit(request):
    fullname = request.POST.get("fullname")
    username = request.POST.get("username")
    email = request.POST.get("email")
    password = request.POST.get("password")
    profile_photo = request.FILES.get("profile-pic")

    print(fullname, username, email, password, profile_photo)
    Usermodel.objects.create(
        username = username,
        fullname = fullname,
        email = email,
        password = password,
        profile_image = profile_photo
    )
    return HttpResponse("Form SUbmitted")

def login(request):
    return render(request, "login.html")

def profile(request):
    username = request.POST.get("username")
    print(Usermodel.objects.filter(username = username).exist())
    return HttpResponse("Profile Page")