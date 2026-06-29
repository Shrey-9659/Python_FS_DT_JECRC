from django.shortcuts import render
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import(
    RegisterSerializer, UserSerializer
)

# Create your views here.

def _token_for(user):
    refrest = RefreshToken.for_user(user)
    return {
        "access" : str(refrest.access_token),
        "refresh" : str(refrest)
    }

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        user = serializer.save()
        return Response({
            "user" : UserSerializer(user).data,
            **_token_for(user)
        }, status=status.HTTP_201_CREATED)
    
class MeView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user