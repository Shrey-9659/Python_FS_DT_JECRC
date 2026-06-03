from django.shortcuts import render
from django.http import HttpResponse
from my_auth_app.models import FormUsers

# Create your views here.
def contact(request):
    return HttpResponse("qwertyui")

def getsignup(request):
    return render(request, 'getsignup.html')

def postsignup(request):
    return render(request, 'postsignup.html')

def submit(request):
    name = request.GET.get("fullname")
    email = request.GET.get("email")
    password = request.GET.get("password")
    # cpass = request.GET.get("confirm_password")
    FormUsers.objects.create(
        name = name,
        email = email,
        password = password
    )
    data = {
        "fullname" : name,
        "email" : email
    }

    return render(request, "submit.html", data)

    # return HttpResponse("Form has been submitted")

def postsubmit(request):
    print(request.POST)
    return HttpResponse("POST FORM SUBMITTED")

# FormUsers.objects.create()
# FormUsers.objects.all()
# FormUsers.objects.values()
# FormUsers.objects.get(id = 1)
# FormUsers.objects.count()
