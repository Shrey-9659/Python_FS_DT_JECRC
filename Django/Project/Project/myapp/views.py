from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

# ---------------------------
# Create your views here.

def register(request):
    return render(request, "register.html")

def submit(request):
    fullname = request.POST.get("fullname")
    username = request.POST.get("username")
    email = request.POST.get("email")
    password = request.POST.get("password")
    
    User.objects.create_user(
        first_name = fullname,
        username= username,
        email= email,
        password=password
    )

    return render(request, "submit.html")

def login_page(request):
    return render(request, "login.html")

def dashboard(request):
    user_name = request.POST.get("username")
    pass_word = request.POST.get("password")
    
    user = authenticate(
        request,
        username = user_name,
        password = pass_word
    )
    if(user != None):
        return render(request, "dashboard.html", {"user" : user})

    return render(request, "login.html", {"message" : "Invalid Credentials"})


def update(request):
    return render(request, "update.html")