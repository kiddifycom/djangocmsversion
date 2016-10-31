from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

from .models import VidInfo

def main_list(request):
    vidStuff = VidInfo.objects.all()
    return render(request, 'kiddify/main_list.html', {'vidStuff': vidStuff})