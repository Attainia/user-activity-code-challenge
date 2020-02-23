from django.db import models

class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50)
    last_login = models.DateField()
    login_count = models.IntegerField()
    project_count = models.IntegerField()
