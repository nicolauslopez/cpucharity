from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class user_stat(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    seconds_mined = models.IntegerField()
    #hashes_solved = models.IntegerField()
    #hashes_per_second = models.IntegerField()

    #def cal_hash_per_second(self):
        #avg = self.hashes_solved/self.seconds_mined
        #self.hashes_per_second = avg
        #self.save()
