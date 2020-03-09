from django.db import models

# Models 
class User(models.Model):
    id = models.IntegerField(primary_key=True)
    username = models.CharField(max_length=20)
    last_login = models.DateTimeField( )
    login_count = models.IntegerField( )
    project_count = models.IntegerField( )