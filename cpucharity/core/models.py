from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class User_Stat(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    seconds_mined = models.IntegerField()
