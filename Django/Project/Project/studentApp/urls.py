from django.urls import path
from .views import *


urlpatterns = [
    path("students/", all_students),
    path("students/<str:pk>", get_student)
]
