# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-11-18 23:57
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('it_manage_app', '0002_persona'),
    ]

    operations = [
        migrations.AddField(
            model_name='pc',
            name='persona',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='it_manage_app.Persona'),
            preserve_default=False,
        ),
    ]
