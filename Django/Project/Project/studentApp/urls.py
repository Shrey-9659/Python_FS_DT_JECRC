from django.urls import path
from .views import *


urlpatterns = [
    # path("students/", all_students),
    # path("students/<str:pk>", get_student)
    path("students/", all_students.as_view()),
    path("students/<str:pk>", get_student.as_view())
]
