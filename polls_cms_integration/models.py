import datetime

from django.db import models
from django.utils import timezone

class VidInfo(models.Model):
    avatar_img = models.CharField(max_length=300, default="Avatar Image src")
    title = models.CharField(max_length=200, default="Title of the talk")
    country_flag = models.CharField(max_length=200, default="Country Flag src")
    vid_poster = models.CharField(max_length=200, default="Vid Poster jpg")
    vid_src = models.CharField(max_length=200, default="Video src")
    src_type = models.CharField(max_length=200, default="Source src mp4")
    track_kind_first=models.CharField(max_length=200, default="First Track src")
    track_kind_second=models.CharField(max_length=200, default="Second Track src")
    thumb_img = models.CharField(max_length=200, default="Thumb image src")

    def __str__(self):
      return(self.title)

