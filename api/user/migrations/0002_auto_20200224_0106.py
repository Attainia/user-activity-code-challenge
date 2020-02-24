# Generated by Django 3.0.3 on 2020-02-24 01:06

from django.db import migrations
from user.models import User

import json
import dateutil.parser

def insert_user(apps, schema_editor):
    with open('user/data/users.json') as user_file:
        users = json.load(user_file)

    for entry in users:
        user_model = User(
            id = entry['id'],
            username = entry['username'],
            last_login = dateutil.parser.isoparse(entry['last_login']),
            login_count = entry['login_count'],
            project_count = entry['project_count']
        )
        user_model.save()

class Migration(migrations.Migration):
    atomic = False

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(insert_user)
    ]
