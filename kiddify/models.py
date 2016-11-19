

from django.db import models
from django.utils import timezone

class VidInfo(models.Model):
    avatar_img = models.CharField(max_length=300)
    title = models.CharField(max_length=200)
    country_flag = models.CharField(max_length=200)
    vid_poster = models.CharField(max_length=200)
    vid_src = models.CharField(max_length=200)
    src_type = models.CharField(max_length=200, default="some string")
    track_kind_first=models.CharField(max_length=200, default="some string")
    track_kind_second=models.CharField(max_length=200, default="some string")
    thumb_img = models.CharField(max_length=200)

    def __str__(self):
      return(self.title)