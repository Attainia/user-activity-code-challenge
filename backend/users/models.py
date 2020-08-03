from django.db import models

class Users(models.Model):
    id = models.IntegerField(primary_key=True)
    username = models.CharField(max_length=200)
    last_login = models.CharField(max_length=200)
    login_count = models.IntegerField()
    project_count = models.IntegerField()