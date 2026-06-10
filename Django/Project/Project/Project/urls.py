"""
URL configuration for Project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from myapp.views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", register, name="register"),
    path("submit/", submit, name="submit"),
    path("login/", login_page, name="login_page"),
    path("check_login/", check_login, name="check_login"),
    path("dashboard/", dashboard, name="dashboard"),
    path("logout_user/", logout_user, name="logout_user"),
    path("delete_user/", delete_user, name="delete_user"),
    path("update_user/", update_user, name="update_user"),
    path("update_details/", update_details, name="update_details"),
    path("postblogs/", postblogs, name="postblogs"),
    path("showblogs/", showblogs, name="showblogs"),
    path("blogs/", blogs, name="allblogs"),
    path("like/<int:postid>", like_post, name="like_post")
] + static(
    settings.MEDIA_URL,
    document_root = settings.MEDIA_ROOT
)
