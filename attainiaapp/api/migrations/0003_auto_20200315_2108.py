# Generated by Django 3.0.4 on 2020-03-16 04:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20200315_2106'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='login_count',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='user',
            name='project_count',
            field=models.IntegerField(default=0),
        ),
    ]
