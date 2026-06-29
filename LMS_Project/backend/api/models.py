from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


class User(AbstractUser):
    is_Instructor = models.BooleanField(default=False)
    avatar = models.URLField(blank=True)
    bio = models.CharField(blank=True)
    headline = models.CharField(max_length=160, blank=True)

    def __str__(self):
        return self.username
    
