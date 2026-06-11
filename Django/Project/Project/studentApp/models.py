from django.db import models

# Create your models here.

class Student(models.Model):
    studentId = models.CharField(max_length=15)
    name = models.CharField(max_length=50)
    batch = models.CharField(max_length=10)

    def __str__(self):
        return self.name

