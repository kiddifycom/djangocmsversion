# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='VidInfo',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('avatar_img', models.CharField(max_length=300)),
                ('title', models.CharField(max_length=200)),
                ('country_flag', models.CharField(max_length=200)),
                ('vid_poster', models.CharField(max_length=200)),
                ('vid_src', models.CharField(max_length=200)),
                ('src_type', models.CharField(default=b'some string', max_length=200)),
                ('track_kind_first', models.CharField(default=b'some string', max_length=200)),
                ('track_kind_second', models.CharField(default=b'some string', max_length=200)),
                ('thumb_img', models.CharField(max_length=200)),
            ],
        ),
    ]
