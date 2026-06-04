from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from .models import Usermodel
from django.forms.models import model_to_dict
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required


# Create your views here.

def register(request):
    return render(request, "register.html")

def submit(request):
    fullname = request.POST.get("fullname")
    username = request.POST.get("username")
    email = request.POST.get("email")
    password = request.POST.get("password")
    # profile_photo = request.FILES.get("profile-pic")

    # print(fullname, username, email, password, profile_photo)
    User.objects.create_user(
        username = username,
        first_name = fullname,
        email = email,
        password = password,
        # profile_image = profile_photo
    )
    return HttpResponse("Form Submitted")

def login_view(request):
    return render(request, "login.html")

def profile(request):
    myuser = request.POST.get("username")
    password = request.POST.get("password")
    print(myuser, password)
    user = authenticate(
        request,
        username = myuser,
        password = password
    )
    
    if user is not None:
        login(request, user)
        return render(request, "profile.html", {"user" : user})
    # user = (Usermodel.objects.get(username = username))
    # return render(request, "profile.html", {"user" : user})
    return HttpResponse("Invalid Credentials")

@login_required
def profile(request):
    return render(request, "profile.html", {"user" : request.user})

def delete(request, username):
    if request.method == "POST":
        user = get_object_or_404(Usermodel, username = username)
        user.delete()
        return HttpResponse('login')
    
def update(request, username):

    user = get_object_or_404(Usermodel, username=username)

    if request.method == "POST":
        user.username = request.POST.get("username")
        user.fullname = request.POST.get("fullname")
        user.save()
        return HttpResponse("Profile Updated")
    return render(request, 'update.html', {'user': user})