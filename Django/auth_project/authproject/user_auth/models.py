from django.db import models

# Create your models here.

class Usermodel(models.Model):
    fullname = models.CharField(max_length=100)
    email = models.EmailField()
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=128)
    profile_image = models.ImageField(upload_to="profile_pictures/")