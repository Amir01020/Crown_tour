# Generated by Django 4.1 on 2023-11-02 04:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('turs', '0004_alter_turs_obj_noservices_alter_turs_obj_yesservices'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='turs_obj',
            name='view',
        ),
        migrations.RemoveField(
            model_name='turs_obj',
            name='view_en',
        ),
        migrations.RemoveField(
            model_name='turs_obj',
            name='view_ru',
        ),
    ]