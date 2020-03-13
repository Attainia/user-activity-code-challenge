
from django.urls import path
from .views import all_users, inactive_users, active_users

urlpatterns = [
    path('users/', all_users),
    path('inactiveUsers/', inactive_users),
    path('activeUsers/', active_users)
]