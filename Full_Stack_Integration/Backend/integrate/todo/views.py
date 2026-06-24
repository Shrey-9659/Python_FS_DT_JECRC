from rest_framework import viewsets
from .models import Todoapp
from .serializers import TodoSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

class TodoListCreateAPIView(APIView):
    def get(self, request):
            todos = Todoapp.objects.all().order_by('-createdAt')
            serializer = TodoSerializer(todos, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self, request):
        print("POST ROUTE TRIGGERED")
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)