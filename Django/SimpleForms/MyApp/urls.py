from django.urls import path
from MyApp.views import *


urlpatterns=[
    path('',form_view,name='forms')
]