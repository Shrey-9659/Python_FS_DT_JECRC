from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import status
from .models import Student
from .serializers import StudentSerializer

# Create your views here.

# 127.0.0.1:8000/api/v1/students
# def all_students(request):
#     student_data = Student.objects.all()
#     student = list(student_data.values())
#     return JsonResponse(student, safe=False)


# FUNCTIONAL METHOD
# Using serializers
# @api_view(["GET", "POST"])
# def all_students(request):
    # if request.method == "GET":
    #     student_data = Student.objects.all()
    #     allstudents = StudentSerializer(student_data, many=True)
    #     return Response(allstudents.data, status=status.HTTP_200_OK)
    # elif request.method == "POST":
    #     serializer = StudentSerializer(data = request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     else:
    #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
# @api_view(["GET", "PUT"])   
# def get_student(request, pk):
    # try:
    #     user = Student.objects.get(pk = pk)
    # except:
    #     return Response({"message" : "User not found"})
    # if request.method == "GET":
    #     serializer = StudentSerializer(user)
    #     return Response(serializer.data, status=status.HTTP_200_OK)
    # elif request.method == "PUT":
    #     serializer = StudentSerializer(user, data = request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     else:
    #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# CLASS METHOD
class all_students(APIView):
    def get(self, request):
        student_data = Student.objects.all()
        allstudents = StudentSerializer(student_data, many=True)
        return Response(allstudents.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = StudentSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class get_student(APIView):
    def get_user(self, pk):
        try:
            user = Student.objects.get(pk = pk)
            return user
        except:
            return Response({"message" : "User not found"})
    def get(self, request, pk):
        user = self.get_user(pk)
        serializer = StudentSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, pk):
        user = self.get_user(pk)
        serializer = StudentSerializer(user, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        user = self.get_user(pk)
        user.delete()
        return Response({"message" : "User Deleted"}, status=status.HTTP_200_OK)
