from users.models import Users
from users.serializers import UsersSerializer
from rest_framework import viewsets

class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer

    def get_queryset(self):
        queryset = self.queryset
        login_count = self.request.query_params.get('login_count', None)
        if login_count is not None:
            queryset = queryset.filter(login_count=login_count)

        login_count_gt = self.request.query_params.get('login_count_gt', None)
        if login_count_gt is not None:
            queryset = queryset.filter(login_count__gt=login_count_gt)
            
        return queryset
