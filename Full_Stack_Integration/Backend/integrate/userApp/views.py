from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


# Create your views here.


@api_view(["GET"])
def all_students(request):
    if request.method == "GET":
        userdata = {
            "name" : "Abhishek",
            "year" : 2026
        }
        print(userdata)
        return Response(userdata, status=status.HTTP_200_OK)