from django.db import models

# Create your models here.
class User(models.Model):
    id = models.IntegerField(primary_key=True)
    username = models.CharField(max_length=30)
    last_login = models.DateTimeField()
    project_count = models.IntegerField()
    login_count = models.IntegerField()