# Generated by Django 4.1 on 2023-11-01 13:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('turs', '0002_turs_obj_noservices_en_turs_obj_noservices_ru_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='turs_obj',
            name='NoServices_en',
        ),
        migrations.RemoveField(
            model_name='turs_obj',
            name='NoServices_ru',
        ),
        migrations.RemoveField(
            model_name='turs_obj',
            name='YesServices_en',
        ),
        migrations.RemoveField(
            model_name='turs_obj',
            name='YesServices_ru',
        ),
    ]
