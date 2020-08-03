from django.urls import include, path
from rest_framework import routers
from users import views

router = routers.DefaultRouter()
router.register(r'users', views.UsersViewSet)
router.register(r'users/?$', views.UsersViewSet)

urlpatterns = [
    path('', include(router.urls)),
]