# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('id')
    serializer_class = UserSerializer

    def returnNoLogins( ):
        return User.objects.exclude(login_count_gt=0)

    def returnMultipleLogins( ):
        return User.objects.exclude(login_count_exact=0)
