from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import status
from .serializer import UserSerializer

# Create your views here.

@api_view(["POST", "GET"])
@permission_classes([AllowAny])
def register(request):
    if(request.method == "POST"):
        print("Data incoming...")
        print(request.data)
        serializer = UserSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
