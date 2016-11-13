from django.conf.urls import patterns, url
from . import views
urlpatterns = patterns('',
    url(
        r'^$',
        'django.contrib.auth.views.login',
        name='login',
        kwargs={'template_name': 'existing_login/login.html'}
    ),
    url(
        r'^logout/$',
        'django.contrib.auth.views.logout',
        name='logout',
        kwargs={'next_page': '/'}
    ),
)