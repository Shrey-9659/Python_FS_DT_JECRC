from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .models import Postblogs, ProfilePicture


# ---------------------------
# Create your views here.

def register(request):
    return render(request, "register.html")

def submit(request):
    fullname = request.POST.get("fullname")
    username = request.POST.get("username")
    email = request.POST.get("email")
    password = request.POST.get("password")
    picture = request.FILES.get("profile")
    
    new_user = User.objects.create_user(
        first_name = fullname,
        username= username,
        email= email,
        password=password
    )

    ProfilePicture.objects.create(
        profile = picture,
        user = new_user
    )

    return render(request, "submit.html")

def login_page(request):
    return render(request, "login.html")

def check_login(request):
    user_name = request.POST.get("username")
    pass_word = request.POST.get("password")
    
    user = authenticate(
        request,
        username = user_name,
        password = pass_word
    )
    if(user != None):
        login(request, user)
        return redirect("dashboard")

    return render(request, "login.html", {"message" : "Invalid Credentials"})

@login_required
def dashboard(request):
    return render(request, "dashboard.html")

@login_required
def logout_user(request):
    logout(request)
    return redirect("login_page")

@login_required
def delete_user(request):
    request.user.delete()
    return redirect("register")


@login_required
def update_user(request):
    print(request.user.email)
    return render(request, "update.html")

@login_required
def update_details(request):
    new_name = request.POST.get("fullname")
    new_username = request.POST.get("username")
    new_email = request.POST.get("email")
    request.user.username = new_username
    request.user.first_name = new_name
    request.user.email = new_email
    request.user.save()
    return redirect("login_page")

@login_required
def postblogs(request):
    if(request.method == "GET"):
        return render(request, "postblogs.html")
    blog_title = request.POST.get("title")
    blog_content = request.POST.get("content")
    Postblogs.objects.create(
        title = blog_title,
        content = blog_content,
        author = request.user
    )
    return redirect("dashboard")

@login_required
def showblogs(request):
    user_blogs = request.user.blogs.all()
    
    return render(request, "showblogs.html", {"blogs" : user_blogs})


def blogs(request):
    all_blogs = Postblogs.objects.all().order_by("-createdAt")
    return render(request, "allblogs.html", {"blogs": all_blogs})