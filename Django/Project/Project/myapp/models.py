from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Postblogs(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="blogs")
    createdAt = models.DateTimeField(auto_now_add=True)