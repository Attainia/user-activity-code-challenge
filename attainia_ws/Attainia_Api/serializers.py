from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = User
        fields = ['id', 'username', 'last_login', 'login_count', 'project_count']