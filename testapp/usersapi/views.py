from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets

from .models import User
from .serializers import UserSerializer

# Create your views here.
def index(request):
    return HttpResponse("Hello world")


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer