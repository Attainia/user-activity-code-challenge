from django.urls import path, include 

from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'users-all', views.UserViewSet)
router.register(r'users-inactive', views.InactiveUserViewSet)
router.register(r'users-active', views.ActiveUserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]