# Generated by Django 4.1.4 on 2022-12-09 18:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('userInfo', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='favorite',
            name='song',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='userInfo.song'),
        ),
    ]