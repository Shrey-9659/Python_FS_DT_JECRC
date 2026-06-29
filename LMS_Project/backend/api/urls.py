from django.urls import path
from django.http import JsonResponse
from .views import (
    RegisterView,
    MeView
)
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView


def root(request):
    return JsonResponse({"success" : True, "message" : "ok"})

urlpatterns = [
    path("", root),
    path("auth/register/", RegisterView.as_view()),
    path("auth/login/", TokenObtainPairView.as_view()),
    path("auth/refresh/", TokenRefreshView.as_view()),
    path("auth/me/", MeView.as_view())
]