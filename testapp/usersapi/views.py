from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets

from .models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ActiveUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().filter(login_count__gt=0)
    serializer_class = UserSerializer

class InactiveUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().filter(login_count__lte=0)
    serializer_class = UserSerializer