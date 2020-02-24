from rest_framework import viewsets

from .serializers import UserSerializer
from .models import User

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer

    def get_queryset(self):
        queryset = User.objects.all().order_by('id')
        activity_filter = self.request.query_params.get('active', None)

        if activity_filter is not None:
            queryset = self.__filter_activity(activity_filter, queryset)

        return queryset

    def __filter_activity(self, activity_filter, queryset):
        if activity_filter == 'true':
            return queryset.filter(login_count__gt=0)
        else:
            return queryset.filter(login_count=0)
