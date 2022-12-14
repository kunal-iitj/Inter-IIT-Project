# Generated by Django 4.1.4 on 2022-12-24 09:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserPreference',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.EmailField(max_length=254)),
                ('languages', models.JSONField()),
                ('genres', models.JSONField()),
                ('user_id', models.IntegerField()),
            ],
        ),
    ]
