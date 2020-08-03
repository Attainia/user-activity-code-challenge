from rest_framework_json_api import serializers
from users.models import Users

class UsersSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Users
        fields = ('id', 'username', 'last_login', 'login_count', 'project_count')

