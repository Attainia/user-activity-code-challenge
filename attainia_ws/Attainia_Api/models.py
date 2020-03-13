from django.db import models

# Create your models here.
class User(models.Model): 
    id = models.IntegerField(primary_key=True)
    username = models.CharField(max_length = 100)
    last_login = models.DateTimeField()
    login_count = models.IntegerField()
    project_count = models.IntegerField()


    def __str__(self):
        return self.id