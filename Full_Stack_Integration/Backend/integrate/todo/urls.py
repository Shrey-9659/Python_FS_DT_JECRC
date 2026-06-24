from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *


urlpatterns = [
    path("tasks/", TodoListCreateAPIView.as_view()),
]