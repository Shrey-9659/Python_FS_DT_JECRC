from django.db import models

# Create your models here.

class Todoapp(models.Model):
    task = models.CharField(max_length=264)
    isCompleted = models.BooleanField(default=False)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.task
