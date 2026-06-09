from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Postblogs(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="blogs")
    likes = models.ManyToManyField(User, related_name="post_likes")
    createdAt = models.DateTimeField(auto_now_add=True)


class ProfilePicture(models.Model):
    profile = models.ImageField(upload_to="profiles/")
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")